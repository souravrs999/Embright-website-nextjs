import "../styles/globals.css";
import LayoutComponent from "../layout/Layout";
import { useRouter } from "next/router";
import {useEffect} from 'react'
import Head from "next/head";
import * as gtag from "../lib/gtag";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </>
  );
}
