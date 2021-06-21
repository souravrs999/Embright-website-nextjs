import "../styles/globals.css";
import LayoutComponent from "../layout/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
      
    </>
  );
}
