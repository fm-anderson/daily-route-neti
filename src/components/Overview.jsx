import { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import Stats from "./Stats";
import {
  handleSameDay,
  handleServices,
  milesCount,
  createMapsRoute,
  itemsCount,
} from "../utils/helper";

function Overview({ selectedDate, setListView, listView }) {
  const data = useRouteLoaderData("home");
  const filteredData = data.filter((item) => item.date === selectedDate);
  const [isSameDay, setIsSameDay] = useState(false);
  const totalMiles = milesCount(filteredData);
  const mapsRoute = createMapsRoute(filteredData);

  const { fixedMountCount, fullMotionCount, cordMaskingCount } =
    itemsCount(filteredData);

  const toggleView = () => {
    setListView((prevListView) => !prevListView);
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
        <a
          href={mapsRoute}
          target="_blank"
          className="text-md badge badge-ghost bg-secondary px-4 py-2 tracking-wider text-white no-underline"
        >
          {`Route: ${selectedDate}`}
        </a>
      </div>
      <div className="mx-1 grid grid-cols-2 gap-3">
        <Stats value={`${fixedMountCount} Fixed Mount`} />
        <Stats value={`${cordMaskingCount} Cord Masking`} />
        <Stats value={`${fullMotionCount} Full Motion`} />
        <Stats value={`${totalMiles} miles`} />
      </div>
    </div>
  );
}

export default Overview;
