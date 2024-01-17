import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routesConfig } from "./routes/routesConfig";

const router = createBrowserRouter(routesConfig);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
