import { useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/configuration";
import { formatDate } from "../utils/helper";
import NavMenu from "../components/NavMenu";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import ModalLogout from "../components/ModalLogout";
import ModalNavigation from "../components/ModalNavigation";

function Layout() {
  const data = useLoaderData();
  const [selectedDate, setSelectedDate] = useState(formatDate(0));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modalAddress, setModalAddress] = useState("");
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
          <div className="m-auto flex flex-col text-center md:max-w-sm">
            <Navbar />
            <div className="mb-20">
              <Outlet
                context={{
                  data,
                  selectedDate,
                  setModalAddress,
                  listView,
                  setListView,
                }}
              />
            </div>
            <NavMenu
              setSelectedDate={setSelectedDate}
              selectedDate={selectedDate}
            />
          </div>
          <ModalLogout />
          <ModalNavigation modalAddress={modalAddress} />
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
