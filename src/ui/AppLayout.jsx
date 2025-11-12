import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AboutBrand from "./AboutBrand";

const AppLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <AboutBrand />
      <Footer />/
    </main>
  );
};

export default AppLayout;
