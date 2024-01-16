import { useLoaderData } from "react-router-dom";
import Stop from "../pages/Stop";

function DailyRoute() {
  const data = useLoaderData();

  return (
    <div className="flex flex-col gap-3">
      {data.map((item) => (
        <Stop key={item.index} {...item} />
      ))}
    </div>
  );
}

export default DailyRoute;
