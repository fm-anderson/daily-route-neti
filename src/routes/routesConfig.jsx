import Layout from "../Layout/Layout";
import Error from "../pages/Error";
import Home from "../pages/Home";

async function layoutLoader() {
  try {
    const response = await fetch(import.meta.env.VITE_BASE_URL);

    if (!response.ok) {
      console.error("HTTP Error: ", response.status);
      return null;
    }

    const resData = await response.json();
    const data = resData.data.filter((item) => item && item.invoice);
    return data;
  } catch (err) {
    console.error("Error: ", err);
    return null;
  }
}

export const routesConfig = [
  {
    path: "/",
    element: <Layout />,
    loader: layoutLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
    ],
  },
];
