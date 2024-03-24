import React, { useState,useEffect } from "react";
import LoginModal from "./Modals/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { changeTheme, setCurrentTheme } from "../features/themeSlice";
import {
  toggleLoginWidget,
  logoutUser,
  userLogin,
} from "../features/authSlice";
import { auth } from "../utils/firebase";


const Header = () => {
  const loginModalState = useSelector(store => store.auth.showLoginMoal);
  const isUserLoggedInState = useSelector(store => store.auth.userInfo);
  const themeName = useSelector(store => store.appTheme.mytheme);
  
  const currentTheme = themeName;
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

  const setTheme = () => dispatch(changeTheme());

  useEffect(() => {
    dispatch(setCurrentTheme());
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


  return <header>
      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              JOB PORTO
            </span>
          </div>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  " aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  ">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  " aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
                  About
                </a>
              </li>
              {!isUserLoggedInState ? <li>
                    <a href="#" onClick={() => showLoginBlock()} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
                      Login
                    </a>
                  </li> : <li>
                    <a href="#" onClick={setUserLogout} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  ">
                      Logout
                    </a>
                  </li>}

              <li>
                <button onClick={setTheme}  id="theme-toggle" data-tooltip-target="tooltip-toggle" type="button" className="text-gray-500 inline-flex items-center justify-center ">
                  {currentTheme == "light" && <svg id="theme-toggle-dark-icon" className={"w-4 h-4"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                      <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z" />
                    </svg>}
                  {currentTheme == "dark" && <svg id="theme-toggle-light-icon" className={"w-4 h-4"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z" />
                    </svg>}
                  <span className="sr-only">Toggle dark mode</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {loginModalState && <LoginModal />}
    </header>;
};

export default Header;
