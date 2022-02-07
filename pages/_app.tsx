import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MainProvider } from "../context/context";
import SiteLayout from "../layouts/Site";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "../services/ga";
import {  Head } from "next/document"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
     <Head>
        <title>WeScoreAnyCar</title>
        <meta property="og:title" content="WeScoreAnyCar" key="home" />
        <meta
          name="description"
          content="Score your vehicle, and find out how your car compares to others. It's like a credit score for your car."
        />
        <meta name="google-site-verification" content="XwHdNtjCdGqANWVn6HxWIQ5hKzEH_aiwi8grd5BJZsI" />
        </Head>
    <MainProvider>

      <ToastContainer />
      <SiteLayout content={<Component {...pageProps} />} />
    </MainProvider>
    </>
  );
}

export default MyApp;
