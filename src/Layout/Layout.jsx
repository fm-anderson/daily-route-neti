import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/configuration";
import { formatDate } from "../utils/helper";
import Overview from "../components/Overview";
import NavMenu from "../components/NavMenu";
import Navbar from "../components/Navbar";
import Login from "../components/Login";

function Layout() {
  const [selectedDate, setSelectedDate] = useState(formatDate(0));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [listView, setListView] = useState(false);

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
          <div className="m-auto flex flex-col justify-between text-center md:max-w-sm">
            <Navbar />
            <Overview
              selectedDate={selectedDate}
              setListView={setListView}
              listView={listView}
            />
            <div className="mt-3">
              <Outlet context={{ selectedDate, listView }} />
            </div>
            <NavMenu
              setSelectedDate={setSelectedDate}
              selectedDate={selectedDate}
            />
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
