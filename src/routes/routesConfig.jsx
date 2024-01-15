import Layout from "../Layout/Layout";
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
        path: "dashboard",
        // element: <Dashboard />,
        // loader: ,
        // action: ,
        errorElement: <Error />,
      },
    ],
  },
];
