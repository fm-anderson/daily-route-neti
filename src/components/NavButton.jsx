import { formatDate } from "../utils/helper";

function NavButton({ size, date, setSelectedDate, selectedDate }) {
  return (
    <button
      onClick={() => setSelectedDate(formatDate(date))}
      className={`${selectedDate === formatDate(date) && "bg-base-300"}`}
    >
      <span
        className={`btm-nav-label text-${size} uppercase ${
          date === 0 && "font-bold"
        }`}
      >
        {date ? formatDate(date) : "Today"}
      </span>
    </button>
  );
}

export default NavButton;
