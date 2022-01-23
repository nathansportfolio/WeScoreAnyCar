import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MainProvider } from "../context/context";
import SiteLayout from "../layouts/Site";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <SiteLayout content={<Component {...pageProps} />} />
    </MainProvider>
  );
}

export default MyApp;
