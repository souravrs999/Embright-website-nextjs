import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";

export default function LayoutComponent({ children }) {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
}
