import { logout } from "../firebase/authentication";

function ModalLogout() {
  return (
    <>
      <input type="checkbox" id="logout-modal" className="modal-toggle" />
      <div className="modal modal-bottom" role="dialog">
        <div className="modal-box">
          <span className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-7 w-7 fill-current stroke-current"
            >
              <path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path>
              <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
            </svg>
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
