import "../styles/globals.css";
import LayoutComponent from "../layout/Layout";
import HeaderComponent from "../components/Header";
import NavbarComponent from "../components/Navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
      
    </>
  );
}
