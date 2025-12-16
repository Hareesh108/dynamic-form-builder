import { lazy, Suspense } from "react";
import { Outlet } from "react-router";

const NotFound = lazy(() => import("src/pages/404"));

const main = {
  path: "",
  element: (
    <Suspense fallback={<>Loading...</>}>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      path: "404",
      element: <NotFound />,
    },
  ],
};

export const mainRoutes = [
  {
    path: "",
    children: [main],
  },
];
