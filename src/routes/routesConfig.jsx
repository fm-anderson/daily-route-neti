import Layout from "../Layout/Layout";
import Error from "../pages/Error";
import Home from "../pages/Home";

const baseUrl = import.meta.env.VITE_BASE_URL;

export async function homeLoader() {
  let data;
  try {
    const response = await fetch(baseUrl);
    const resData = await response.json();
    data = resData.data.filter((item) => item && item.invoice);
  } catch (err) {
    console.log("Error: ", err);
  }
  return data;
}

export const routesConfig = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
        errorElement: <Error />,
      },
    ],
  },
];
