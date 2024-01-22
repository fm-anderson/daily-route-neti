import { logout } from "../firebase/authentication";
import { svgPaths } from "../utils/consts";
import SvgWrapper from "./SvgWrapper";

function ModalLogout() {
  return (
    <>
      <input type="checkbox" id="logout-modal" className="modal-toggle" />
      <div className="modal modal-bottom m-auto md:max-w-sm" role="dialog">
        <div className="modal-box">
          <span className="flex gap-3">
            <SvgWrapper pathData={svgPaths.logout} size={7} />
            <h3 className="text-xl font-bold">Logging out...</h3>
          </span>
          <p className="py-4 text-lg">Are you sure you want to logout?</p>
          <div className="modal-action">
            <label htmlFor="logout-modal" className="btn">
              Cancel
            </label>
            <label className="btn btn-secondary" onClick={logout}>
              Logout
            </label>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="logout-modal"></label>
      </div>
    </>
  );
}

export default ModalLogout;
