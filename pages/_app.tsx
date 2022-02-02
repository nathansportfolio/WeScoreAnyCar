import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MainProvider } from "../context/context";
import SiteLayout from "../layouts/Site";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <ToastContainer />
      <SiteLayout content={<Component {...pageProps} />} />
    </MainProvider>
  );
}

export default MyApp;
