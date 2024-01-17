import { useLoaderData, useOutletContext } from "react-router-dom";
import Stop from "../pages/Stop";

function DailyRoute() {
  const data = useLoaderData();
  const { selectedDate } = useOutletContext();
  const filteredData = data.filter((item) => item.date === selectedDate);

  return (
    <>
      {filteredData.length === 0 ? (
        <div className="flex h-full items-center justify-center">
          <p className="text-2xl font-semibold">
            No stops scheduled for {selectedDate}.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filteredData.map((item, index) => (
            <Stop key={item.index} displayIndex={index + 1} {...item} />
          ))}
        </div>
      )}
    </>
  );
}

export default DailyRoute;
