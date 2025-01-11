import BaseComponent from "@/BaseComponent";
import SignInPage from "@/pages/SignIn";
import SignUpPage from "@/pages/signUp";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseComponent />,
  },
  {
    path: "signIn",
    element: <SignInPage />,
  },
  {
    path: "signup",
    element: <SignUpPage />,
  },
]);
