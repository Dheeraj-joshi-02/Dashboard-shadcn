import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LogInPage } from "./pages/LogInPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LogInPage />,
  },
]);
