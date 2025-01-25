import BaseComponent from "@/BaseComponent";
import Layout from "@/components/global/Layout";
import MainTaskPage from "@/pages/MainTaskPage";
import OverviewPage from "@/pages/overviewPage";
import SignInPage from "@/pages/SignIn";
import SignUpPage from "@/pages/signUp";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseComponent />,
  },
  {
    path: "/signIn",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/todo",
    element: <Layout />,
    children: [
      {
        path: "overview",
        element: <OverviewPage />,
      },
      {
        path: "main/:day",
        element: <MainTaskPage />,
      },
      {
        path: "list/:category",
        element: <MainTaskPage />,
      },
    ],
  },
]);
