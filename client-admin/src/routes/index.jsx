import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../views/HomePage";
import RegisterPage from "../views/RegisterPage";
import CategoryPage from "../views/CategoryPage";
import LoginPage from "../views/LoginPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      return localStorage.access_token ? redirect("/") : null;
    },
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () => {
          return !localStorage.access_token ? redirect("/login") : null;
        },
      },
      {
        path: "/category",
        element: <CategoryPage />,
        loader: () => {
          return !localStorage.access_token ? redirect("/login") : null;
        },
      },
      {
        path: "/register",
        element: <RegisterPage />,
        loader: () => {
          return !localStorage.access_token ? redirect("/login") : null;
        },
      },
    ],
    loader: () => {
      return !localStorage.access_token ? redirect("/login") : null;
    },
  },
]);

export default router;
