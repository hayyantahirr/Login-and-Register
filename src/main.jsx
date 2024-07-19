import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./Screens/Register";
import Layout from "./Layout";
import Home from "./Screens/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Register /> },
      { path: "register", element: <Register /> },
      { path: "home", element: <Home /> },
      { path: "*", element: <Login /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
