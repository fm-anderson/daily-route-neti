import { formatDate } from "../utils/helper";

function NavButton({ size, date, setSelectedDate }) {
  return (
    <button onClick={() => setSelectedDate(formatDate(date))}>
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
