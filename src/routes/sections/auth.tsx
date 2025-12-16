import { lazy, Suspense } from "react";
import { Outlet } from "react-router";

const Login = lazy(() => import("src/pages/auth/login"));
const SignUp = lazy(() => import("src/pages/auth/signup"));

const auth = {
  path: "auth",
  element: (
    <Suspense fallback={<>Loading...</>}>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
  ],
};

export const authRoutes = [
  {
    path: "",
    children: [auth],
  },
];
