import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./Screens/Register";
import Layout from "./Layout";
import Home from "./Screens/Home";
import Login from "./Screens/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "home", element: <Home /> },
      { path: "*", element: <Register/> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
