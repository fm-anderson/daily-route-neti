import { Outlet } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import Navbar from "../components/Navbar";
import Login from "../components/Login";

function Layout() {
  return (
    <>
      {false ? (
        <div className="flex h-screen flex-col justify-center text-center">
          <Login />
        </div>
      ) : (
        <>
          <div className="flex h-screen flex-col justify-between text-center">
            <Navbar />
            <Outlet />
            <NavMenu />
          </div>
        </>
      )}
    </>
  );
}

export default Layout;
