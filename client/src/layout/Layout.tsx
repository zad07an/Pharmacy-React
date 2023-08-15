import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import useScrollToTopOnNavigation from "../hooks/useScrollToTopOnNavigation";

function Layout() {
  useScrollToTopOnNavigation();

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
