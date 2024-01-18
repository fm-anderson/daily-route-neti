import { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import Stats from "./Stats";
import {
  mountCount,
  handleSameDay,
  handleServices,
  milesCount,
} from "../utils/helper";

function Overview({ selectedDate, setListView, listView }) {
  const data = useRouteLoaderData("home");
  const filteredData = data.filter((item) => item.date === selectedDate);
  const [isSameDay, setIsSameDay] = useState(false);
  const totalMiles = milesCount(filteredData);

  const { fixedMountCount, fullMotionCount } = mountCount(filteredData);

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
            {listView ? "list" : "cards"}
          </button>
          {isSameDay && (
            <p className="badge bg-accent px-3 py-1 tracking-wider text-white">
              same day
            </p>
          )}
        </span>
        <p className="text-md badge badge-ghost bg-secondary px-4 py-2 tracking-wider text-white">
          {`${selectedDate}, ${new Date().getFullYear()}`}
        </p>
      </div>
      <div className="mx-1  grid grid-cols-2 gap-3">
        <Stats value={`${filteredData.length} Clients`} />
        <Stats value={`${fixedMountCount} Fixed Mount`} />
        <Stats value={`${totalMiles} miles`} />
        <Stats value={`${fullMotionCount} Full Motion`} />
      </div>
    </div>
  );
}

export default Overview;
