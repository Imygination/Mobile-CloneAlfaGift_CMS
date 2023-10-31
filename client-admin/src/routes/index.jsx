import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../views/HomePage";
import RegisterPage from "../views/RegisterPage";
import CategoryPage from "../views/CategoryPage";
import LoginPage from "../views/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/category",
        element: <CategoryPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
