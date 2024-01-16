import Layout from "../Layout/Layout";
import DailyRoute from "../pages/DailyRoute";
import Error from "../pages/Error";
import Home from "../pages/home";

export const routesConfig = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: ,
        // action: ,
        errorElement: <Error />,
      },
      {
        path: "login",
        // element: <Login />,
        // loader: ,
        // action: ,
        errorElement: <Error />,
      },
      {
        path: "route",
        element: <DailyRoute />,
        // loader: ,
        // action: ,
        errorElement: <Error />,
      },
    ],
  },
];
