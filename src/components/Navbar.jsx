import { logout } from "../firebase/authentication";
import ThemeController from "./ThemeController";

function Navbar() {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <button className="btn btn-square btn-ghost" onClick={logout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-current stroke-current"
          >
            <path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path>
            <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
          </svg>
        </button>
        <a className="btn btn-ghost pointer-events-none text-xl">
          Tech Install
        </a>
      </div>
      <div className="flex-none">
        <ThemeController />
      </div>
    </div>
  );
}

export default Navbar;
