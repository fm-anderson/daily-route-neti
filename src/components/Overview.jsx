import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Stats from "./Stats";
import {
  handleSameDay,
  handleServices,
  createMapsRoute,
  itemsCount,
  copyToClipboard,
  formatForWhatsApp,
} from "../utils/helper";

function Overview({ setCopied }) {
  const { selectedDate, listView, setListView, data } = useOutletContext();
  const [isSameDay, setIsSameDay] = useState(false);
  const filteredData = data.filter((item) => item.date === selectedDate);
  const mapsRoute = createMapsRoute(filteredData);
  const { fixedMountCount, fullMotionCount, cordMaskingCount, milesCount } =
    itemsCount(filteredData);

  const toggleView = () => {
    setListView((prevListView) => !prevListView);
  };

  const copyRoute = () => {
    const whatsappFormattedText = formatForWhatsApp(filteredData);
    copyToClipboard(whatsappFormattedText, setCopied);
  };

  useEffect(() => {
    setIsSameDay(handleSameDay(filteredData, handleServices));
  }, [filteredData]);

  return (
    <div>
      <div className="mx-3 my-2 flex justify-between">
        <span className="flex gap-1">
          <button
            className="badge bg-base-200 px-3 py-1 tracking-wider"
            onClick={toggleView}
          >
            {listView ? "cards" : "list"}
          </button>
          {isSameDay && (
            <p className="badge bg-accent px-3 py-1 tracking-wider text-white">
              same day
            </p>
          )}
        </span>
        {filteredData.length > 0 && (
          <span className="flex gap-1">
            <a
              href={mapsRoute}
              target="_blank"
              className="text-md badge badge-ghost bg-secondary px-4 py-2 tracking-wider text-white no-underline"
            >
              {`Route: ${selectedDate}`}
            </a>
            <button
              className="text-md badge badge-ghost bg-emerald-600 px-2 py-2 text-white"
              onClick={() => copyRoute()}
            >
              W
            </button>
          </span>
        )}
      </div>

      <div className="mx-1 grid grid-cols-2 gap-3">
        <Stats value={`${fixedMountCount} Fixed Mount`} />
        <Stats value={`${cordMaskingCount} Cord Masking`} />
        <Stats value={`${fullMotionCount} Full Motion`} />
        <Stats value={`${milesCount} miles`} />
      </div>
    </div>
  );
}

export default Overview;
