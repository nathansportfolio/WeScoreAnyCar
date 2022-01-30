import { createContext, useState } from "react";
import { MotApiCall } from "../services/motCalls";

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
});

export const MainProvider: React.FC<MainContextProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [vehicle, setVehicle] = useState({ registration: "sample reg" });
  const [drawer, setDrawer] = useState(false);
  const [error, setError] = useState(false);

  const getScore = async (registration: string) => {
    const response = await MotApiCall(registration);
    setVehicle(JSON.parse(response));
  };

  const login = (email: string, password: string) => {
    setLoading(true);

    setTimeout(() => {
      setUser({ firstName: "Nathan", email });
      setLoading(false);
    }, 1000);
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
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
