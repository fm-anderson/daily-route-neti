import { useLoaderData, useOutletContext } from "react-router-dom";
import Stop from "./Stop";

function DailyRoute() {
  const data = useLoaderData();
  const { selectedDate, listView } = useOutletContext();
  const filteredData = data.filter((item) => item.date === selectedDate);

  return (
    <>
      {filteredData.length === 0 ? (
        <div className="flex h-96 items-center justify-center">
          <p className="text-2xl font-semibold">
            No jobs scheduled for {selectedDate}.
          </p>
        </div>
      ) : (
        <div className="mx-1 flex flex-col gap-3">
          {filteredData.map((item, index) => (
            <Stop
              key={item.index}
              displayIndex={index + 1}
              listView={listView}
              {...item}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default DailyRoute;
