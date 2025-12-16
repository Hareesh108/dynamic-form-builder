import { lazy, Suspense } from "react";
import { Outlet } from "react-router";

const Home = lazy(() => import("src/pages/dashboard/home"));

const dashboard = {
  path: "dashboard",
  element: (
    <Suspense fallback={<>Loading...</>}>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      path: "home",
      element: <Home />,
    },
  ],
};

export const dashboardRoutes = [
  {
    path: "",
    children: [dashboard],
  },
];
