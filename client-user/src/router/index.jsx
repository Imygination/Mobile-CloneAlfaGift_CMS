import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
// import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default router
