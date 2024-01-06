import Browse from "../components/Browse";
import Error from "../components/Error";
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
  {
    path: AppPaths.BROWSE,
    element: <Error />,
  },
];

export default AppRoutes;
