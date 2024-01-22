import { useOutletContext } from "react-router-dom";
import Overview from "../components/Overview";
import Stop from "../components/Stop";

function Home() {
  const { selectedDate, listView, data } = useOutletContext();
  const filteredData = data.filter((item) => item.date === selectedDate);

  return (
    <div>
      <Overview />
      {filteredData.length === 0 ? (
        <div className="mt-6 flex h-96 items-center justify-center">
          <p className="text-2xl font-semibold">
            No jobs scheduled for {selectedDate}.
          </p>
        </div>
      ) : (
        <div className="mx-1 mt-6 flex flex-col gap-3">
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
    </div>
  );
}

export default Home;
