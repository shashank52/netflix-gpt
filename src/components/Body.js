import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";

const Body = () => {
  const appRouter = createBrowserRouter(AppRoutes);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
