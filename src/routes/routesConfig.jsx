import Layout from "../Layout/Layout";
import Error from "../pages/Error";
import Home from "../pages/Home";

async function layoutLoader() {
  let data;
  try {
    const response = await fetch(import.meta.env.VITE_BASE_URL);
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
