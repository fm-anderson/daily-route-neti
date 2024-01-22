import { formatDate } from "../utils/helper";

function NavButton({ size, date, setSelectedDate, selectedDate, isEmpty }) {
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
      <div
        className={`badge badge-xs ${isEmpty ? "badge" : "badge-secondary"}`}
      ></div>
    </button>
  );
}

export default NavButton;
