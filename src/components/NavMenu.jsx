import NavButton from "./NavButton";

function NavMenu({ setSelectedDate, selectedDate }) {
  return (
    <header>
      <div className="btm-nav m-auto bg-base-200 md:max-w-sm">
        <NavButton
          size={"lg"}
          date={0}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        />
        <NavButton
          date={1}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        />
        <NavButton
          date={2}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        />
        <NavButton
          date={3}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        />
        <NavButton
          date={4}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        />
      </div>
    </header>
  );
}

export default NavMenu;
