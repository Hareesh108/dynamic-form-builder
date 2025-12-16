import { Navigate, useRoutes } from "react-router";
import { dashboardRoutes } from "./dashboard";
import { mainRoutes } from "./main";

export default function Router() {
  return useRoutes([
    ...dashboardRoutes,

    ...mainRoutes,

    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
