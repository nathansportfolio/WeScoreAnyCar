import { createContext, useState } from "react";
import { MotApiCall } from "../services/motCalls";
import app from "../services/firebase";
import {
  updateProfile,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import strings from "./strings";
import useLocalStorage from "../utils/useLocalStorage";
import { toast } from "react-toastify";

interface MainContextType {
  user: any;
  vehicle: any;
  saved: any;
  drawer: boolean;
  loading: boolean;
  getScore: Function;
  login: Function;
  setVehicle: Function;
  toggleDrawer: Function;
  setError: Function;
  error: boolean;
  setLoading: Function;
  register: Function;
  logout: Function;
  googleLogin: Function;
  passwordReset: Function;
  savedToggle: Function;
  removeSaved: Function;
  sortSaved: Function;
}

interface MainContextProps {}

const NullFunction = () => {
  return;
};

export const MainContext = createContext<MainContextType>({
  user: {},
  vehicle: {},
  saved: [],
  drawer: false,
  loading: false,
  error: false,
  getScore: NullFunction,
  login: NullFunction,
  setError: NullFunction,
  setVehicle: NullFunction,
  toggleDrawer: NullFunction,
  setLoading: NullFunction,
  register: NullFunction,
  logout: NullFunction,
  googleLogin: NullFunction,
  passwordReset: NullFunction,
  savedToggle: NullFunction,
  removeSaved: NullFunction,
  sortSaved: NullFunction,
});

export const MainProvider: React.FC<MainContextProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useLocalStorage("user", {});
  const [vehicle, setVehicle] = useState({ registration: "sample reg" });
  const [drawer, setDrawer] = useState(false);
  const [error, setError] = useState(false);
  const [saved, setSaved] = useLocalStorage("saved", []);
  app;

  const getScore = async (registration: string) => {
    const response = await MotApiCall(registration);
    setVehicle(JSON.parse(response));
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    const auth = getAuth();
    try {
      const {
        user: { displayName, uid, accessToken },
      }: { user: any } = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      let monogoResponse = await fetch("/api/handler/" + email, {
        method: "GET",
      });
      let data = await monogoResponse.json();
      const {
        message: { saved },
      } = data;
      setUser({ email, displayName, uid, accessToken, saved });
      setLoading(false);
      return false;
    } catch (err: any) {
      setLoading(false);
      if (err.message === strings.USER_NOT_FOUND) {
        return "User not found";
      }
      if (err.message === strings.INCORRECT_PASSWORD) {
        return "Incorrect Password";
      }
      if (err.message === strings.TOO_MANY_ATTEMPTS) {
        return "Too many attempts. Please try again in a few minutes..";
      }
      return err.message;
    }
  };

  const googleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      const {
        currentUser: { displayName, uid, accessToken, email },
      }: { currentUser: any } = auth;
      setUser({ email, displayName, uid, accessToken });
      return false;
    } catch (err: any) {
      return err.message;
    }
  };

  const passwordReset = async (email: string = user.email) => {
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.info("Email Sent!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    } catch (err: any) {
      toast.error("No Account Found", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return err.message;
    }
  };

  const register = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    setLoading(true);
    const auth: { currentUser: any } = getAuth();
    const {
      user: { uid, accessToken },
    }: // @ts-ignore
    { user: any } = await createUserWithEmailAndPassword(auth, email, password);
    updateProfile(auth.currentUser, {
      displayName,
    });

    setUser({ email, displayName, uid, accessToken, saved: [] });
    setLoading(false);
    return true;
  };

  const savedToggle = async (car: any) => {
    const {
      vehicleString: {
        registration,
        engineSize,
        fuelType,
        make,
        model,
        primaryColour,
        score,
        motTests,
      },
      averageVehicle: { avgScore },
    } = car;
    setLoading(true);
    try {
      const res = await fetch("/api/handler", {
        method: "PUT",
        body: JSON.stringify({
          email: user.email,
          registration,
          engineSize,
          fuelType,
          make,
          model,
          primaryColour,
          score,
          avgScore,
          mileage: parseInt(motTests[0].odometerValue),
        }),
      });

      setUser({
        ...user,
        saved: [
          ...user.saved,
          {
            registration,
            engineSize,
            fuelType,
            make,
            model,
            primaryColour,
            score,
            avgScore,
            mileage: parseInt(motTests[0].odometerValue),
          },
        ],
      });

      toast.info("Added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
    } catch (err) {
      toast.error("Failed...", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("er", err);
      setLoading(false);
    }
  };

  const removeSaved = async (car: any) => {
    const {
      registration,
      engineSize,
      fuelType,
      make,
      model,
      primaryColour,
      score,
      avgScore,
      motTests,
    } = car;
    setLoading(true);
    try {
      const res = await fetch("/api/handler", {
        method: "DELETE",
        body: JSON.stringify({
          email: user.email,
          registration,
          engineSize,
          fuelType,
          make,
          model,
          primaryColour,
          score,
          avgScore,
          mileage: parseInt(motTests[0].odometerValue),
        }),
      });

      const saved = user.saved.filter(
        (vehicle: any) => vehicle.registration !== registration
      );

      setUser({ ...user, saved });

      setLoading(false);
    } catch (err) {
      toast.error("Failed...", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
    }
  };

  const sortSaved = (value: any) => {
    const vehicles = user.saved;

    if (value === "SH") {
      vehicles.sort((a: any, b: any) => {
        return a.score - b.score;
      });
    }
    if (value === "SL") {
      vehicles.sort((a: any, b: any) => {
        return b.score - a.score;
      });
    }
    if (value === "MH") {
    }
    if (value === "ML") {
    }

    setUser({ ...user, saved: vehicles });
  };

  return (
    <MainContext.Provider
      value={{
        user,
        vehicle,
        saved,
        drawer,
        loading,
        error,
        setLoading: (value: boolean) => setLoading(value),
        setError: (value: boolean) => setError(value),
        toggleDrawer: () => setDrawer(!drawer),
        getScore,
        setVehicle: (vehicle: any) => setVehicle(vehicle),
        login: (email: string, password: string) => login(email, password),
        googleLogin,
        register: (email: string, password: string, displayName: string) =>
          register(email, password, displayName),
        logout: () => {
          setUser({});
          localStorage.clear();
          return true;
        },
        passwordReset,
        savedToggle,
        removeSaved,
        sortSaved,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
