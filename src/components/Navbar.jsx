import SvgWrapper from "./SvgWrapper";
import ThemeController from "./ThemeController";
import { svgPaths } from "../utils/consts";

function Navbar() {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <label htmlFor="logout-modal" className="btn btn-square btn-ghost">
          <SvgWrapper pathData={svgPaths.logout} size={7} />
        </label>

        <p className="btn btn-ghost pointer-events-none text-xl">
          Tech Install
        </p>
      </div>
      <div className="flex-none">
        <ThemeController />
      </div>
    </div>
  );
}

export default Navbar;
