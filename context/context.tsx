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
} from "firebase/auth";
import strings from "./strings";

interface MainContextType {
  user: any;
  vehicle: any;
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
}

interface MainContextProps {}

const NullFunction = () => {
  return;
};

export const MainContext = createContext<MainContextType>({
  user: {},
  vehicle: {},
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
});

export const MainProvider: React.FC<MainContextProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [vehicle, setVehicle] = useState({ registration: "sample reg" });
  const [drawer, setDrawer] = useState(false);
  const [error, setError] = useState(false);
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
      } = await signInWithEmailAndPassword(auth, email, password);

      setUser({ email, displayName, uid, accessToken });
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
     const { currentUser: { displayName, uid, accessToken, email }} = auth
     setUser({ email, displayName, uid, accessToken });
     return false
    } catch (err) {
      return err.message
    }
  };

  const register = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    setLoading(true);
    const auth = getAuth();
    const {
      user: { uid, accessToken },
    } = await createUserWithEmailAndPassword(auth, email, password);
    updateProfile(auth.currentUser, {
      displayName,
    });

    setUser({ email, displayName, uid, accessToken });
    setLoading(false);
    return true;
  };

  return (
    <MainContext.Provider
      value={{
        user,
        vehicle,
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
          return true;
        },
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
