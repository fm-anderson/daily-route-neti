import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex h-screen flex-col items-center justify-between text-center">
      <header>
        <h1 className="text-3xl font-bold ">Header</h1>
      </header>

      <Outlet />

      <footer>
        <h1 className="text-3xl font-bold ">Footer</h1>
      </footer>
    </div>
  );
}

export default Layout;
