import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MainProvider } from "../context/context";
import SiteLayout from "../layouts/Site";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ga from '../services/ga'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url:any) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <MainProvider>
      <ToastContainer />
      <SiteLayout content={<Component {...pageProps} />} />
    </MainProvider>
  );
}

export default MyApp;
