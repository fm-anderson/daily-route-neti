import { Outlet } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="flex h-screen flex-col justify-between text-center">
      <Navbar />

      <Outlet />

      <NavMenu />
    </div>
  );
}

export default Layout;
