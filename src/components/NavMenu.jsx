import { useRouteLoaderData } from "react-router-dom";
import NavButton from "./NavButton";
import { formatDate } from "../utils/helper";

function NavMenu({ setSelectedDate, selectedDate }) {
  const data = useRouteLoaderData("home");

  const isDateEmpty = (date) => {
    const formattedDate = formatDate(date);
    return !data.some((item) => item.date === formattedDate);
  };

  return (
    <header>
      <div className="btm-nav m-auto bg-base-200 md:max-w-sm">
        <header>
          <div className="btm-nav m-auto bg-base-200 md:max-w-sm">
            {[0, 1, 2, 3, 4].map((date) => (
              <NavButton
                key={date}
                isEmpty={isDateEmpty(date)}
                size={"lg"}
                date={date}
                setSelectedDate={setSelectedDate}
                selectedDate={selectedDate}
              />
            ))}
          </div>
        </header>
      </div>
    </header>
  );
}

export default NavMenu;
