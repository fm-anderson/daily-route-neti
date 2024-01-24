import {
  handleAddress,
  handlePhone,
  handleSameDay,
  handleServices,
} from "../utils/helper";
import IconLink from "./IconLink";
import { svgPaths } from "../utils/consts";
import SvgWrapper from "./SvgWrapper";

function Actions({ displayIndex, listView, setModalAddress, ...item }) {
  const isSameDay = handleSameDay([item], handleServices);

  return (
    <div
      className={`flex justify-between border-b-base-200 px-3 py-3
      ${isSameDay ? "bg-accent" : "bg-base-300"}
      ${listView ? "rounded-2xl" : "-mb-3 rounded-t-2xl border-b-4"}`}
    >
      <span className="flex justify-start">
        <h1 className="text-lg font-light">{`${displayIndex} - ${
          listView ? handleAddress(item.address) : item.name
        }`}</h1>
      </span>

      <span className="flex gap-5">
        <label
          htmlFor="navigation-modal"
          className="text-base-content"
          onClick={() => setModalAddress(item.address)}
        >
          <SvgWrapper pathData={svgPaths.navigation} size={7} />
        </label>

        <IconLink
          href={`tel:${handlePhone(item.phone)}`}
          pathData={svgPaths.phone}
          size={7}
        />
        <IconLink
          href={`sms:${handlePhone(item.phone)}`}
          pathData={svgPaths.sms}
          size={7}
        />
      </span>
    </div>
  );
}

export default Actions;
