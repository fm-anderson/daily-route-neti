import { useRouteLoaderData } from "react-router-dom";
import Stats from "./Stats";

function Overview({ selectedDate }) {
  // view selector | date | # of jobs | total miles driven | total hours driven
  const data = useRouteLoaderData("home");
  const filteredData = data.filter((item) => item.date === selectedDate);

  const isSameDay = () => {
    filteredData.forEach((item) => {
      if (item.service.includes("Same Day")) {
        return true;
      }
    });
    return false;
  };

  return (
    <div>
      <div className="mx-3 my-2 flex justify-between">
        <span className="flex gap-1">
          <p className="badge bg-base-200 px-3 py-1 tracking-wider">cards</p>
          <p className="badge bg-accent px-3 py-1 tracking-wider text-white">
            same day
          </p>
        </span>
        <p className="text-md badge badge-ghost bg-secondary px-4 py-2 tracking-wider text-white">
          {`${selectedDate}, ${new Date().getFullYear()}`}
        </p>
      </div>
      <div className="mx-1  grid grid-cols-2 gap-3">
        <Stats value={"4 Clients"} />
        <Stats value={"1 Fixed Mount"} />
        <Stats value={"89 miles"} />
        <Stats value={"3 Full Motion"} />
      </div>
    </div>
  );
}

export default Overview;
