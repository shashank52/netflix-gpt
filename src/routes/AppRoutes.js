import Browse from "../components/Browse";
import Login from "../components/Login";

import AppPaths from "./AppPaths";

const AppRoutes = [
  {
    path: AppPaths.DEFAULT,
    element: <Login />,
  },
  {
    path: AppPaths.BROWSE,
    element: <Browse />,
  },
];

export default AppRoutes;
