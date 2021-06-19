import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";
import NavbarComponent from "../components/Navbar";

export default function LayoutComponent({ children }) {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
}
