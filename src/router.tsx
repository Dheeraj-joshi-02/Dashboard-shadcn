import { createBrowserRouter } from "react-router-dom";
// import { HomePage } from "@/pages/HomePage";
import { LogInPage } from "@/pages/LogInPage";
import { RegisterPage } from "@/pages/RegisterPage";

export const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <HomePage />,
  // },
  {
    path: "/",
    element: <LogInPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
