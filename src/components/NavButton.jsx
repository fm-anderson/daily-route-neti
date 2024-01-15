function NavButton({ size, date = false }) {
  const formatDate = (offset) => {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <button>
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
