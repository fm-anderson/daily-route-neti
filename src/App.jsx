import { RouterProvider, createBrowserRouter } from "react-router-dom";
import useDebugRender from "tilg";
import { routesConfig } from "./routes/routesConfig";

const router = createBrowserRouter(routesConfig);

function App() {
  useDebugRender();

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
