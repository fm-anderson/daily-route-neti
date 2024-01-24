import wazeIcon from "../assets/waze-icon.svg";
import googleMapsIcon from "../assets/google-map-icon.svg";
import { removeAptNumber } from "../utils/helper";

function ModalNavigation({ modalAddress }) {
  return (
    <>
      <input type="checkbox" id="navigation-modal" className="modal-toggle" />
      <div className="modal modal-bottom m-auto md:max-w-sm" role="dialog">
        <div className="modal-box">
          <div className="flex justify-center gap-6">
            <span>
              <a
                className="btn btn-square btn-lg"
                target="_blank"
                href={`https://waze.com/ul?q=${encodeURIComponent(
                  removeAptNumber(modalAddress),
                )}`}
              >
                <img src={wazeIcon} width={40} height={40} />
              </a>
              <p className="text-center">Waze</p>
            </span>

            <span>
              <a
                className="btn btn-square btn-lg"
                target="_blank"
                href={`http://maps.google.com/?q=${encodeURIComponent(
                  removeAptNumber(modalAddress),
                )}`}
              >
                <img src={googleMapsIcon} width={30} height={30} />
              </a>
              <p className="text-center">G. Maps</p>
            </span>
          </div>

          <div className="modal-action">
            <label htmlFor="navigation-modal" className="btn btn-secondary">
              Cancel
            </label>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="navigation-modal"></label>
      </div>
    </>
  );
}

export default ModalNavigation;
