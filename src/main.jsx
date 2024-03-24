import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MainBody from './components/MainBody.jsx';
import './index.css'
import { Provider } from "react-redux";
import {store,persistor} from './store/store.js';
import { PersistGate } from "redux-persist/integration/react";

const AppLayout = () => {
  
  return <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.Fragment>
          <Outlet />
        </React.Fragment>
      </PersistGate>
    </Provider>;
}

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <MainBody/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routerConfig}>
  </RouterProvider>
);
