import { svgPaths } from "../utils/consts";
import SvgWrapper from "./SvgWrapper";

function ToastAlert() {
  return (
    <div className="toast toast-center toast-top">
      <div className="rounded-3xl bg-base-300">
        <div className="alert flex bg-secondary text-white opacity-80">
          <span className="text-lg tracking-wide">Copied!</span>
          <SvgWrapper pathData={svgPaths.copied} size={7} />
        </div>
      </div>
    </div>
  );
}

export default ToastAlert;
