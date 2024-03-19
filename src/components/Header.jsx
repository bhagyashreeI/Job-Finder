import React, { useState,useEffect } from "react";
import LoginModal from "./Modals/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged,signOut } from "firebase/auth";
import {
  toggleLoginWidget,
  logoutUser,
  userLogin,
} from "../features/authSlice";
import { auth } from "../utils/firebase";

const Header = () => {
  const loginModalState = useSelector(store => store.auth.showLoginMoal);
  const isUserLoggedInState = useSelector(store => store.auth.userInfo);
  const dispatch = useDispatch();
  const showLoginBlock = () => {
    dispatch(toggleLoginWidget());
  };
  const setUserLogout = () => {
    //dispatch(logoutUser());
    signOut(auth)
      .then(() => {
        dispatch(logoutUser())
      })
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, user => {
      if (user) {
        //navigate("/browse");
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email } = user;

        dispatch(userLogin({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
          }));
      } else {
        //navigate("/");
        dispatch(logoutUser());
      }
    });

    // this will be called when our component will be unmounted
    return () => {
      unsubcribe();
    };
  }, []);


  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              JOB PORTO
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              {!isUserLoggedInState
                ? <li>
                    <a
                      href="#"
                      onClick={() => showLoginBlock()}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Login
                    </a>
                  </li>
                : <li>
                    <a
                      href="#"
                      onClick={setUserLogout}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Logout
                    </a>
                  </li>}
            </ul>
          </div>
        </div>
      </nav>
      {loginModalState && <LoginModal />}
    </header>
  );
};

export default Header;
