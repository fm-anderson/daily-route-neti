import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import NavMenu from "../components/NavMenu";
import { formatDate } from "../utils/helper";
import { auth } from "../firebase/configuration";

function Layout() {
  const [selectedDate, setSelectedDate] = useState(formatDate(0));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <>
          <div className="flex h-screen flex-col justify-between text-center">
            <Navbar />
            <Outlet context={{ selectedDate }} />
            <NavMenu setSelectedDate={setSelectedDate} />
          </div>
        </>
      ) : (
        <div className="flex h-screen flex-col justify-center text-center">
          <Login />
        </div>
      )}
    </>
  );
}

export default Layout;
