import NavButton from "./NavButton";

function NavMenu({ setSelectedDate, selectedDate }) {
  return (
    <header>
      <div className="btm-nav m-auto bg-base-200 md:max-w-sm">
        <NavButton
          size={"xs"}
          date={-2}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        />
        <NavButton
          size={"md"}
          date={-1}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        />
        <NavButton
          size={"lg"}
          date={0}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        />
        <NavButton
          size={"md"}
          date={1}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        />
        <NavButton
          size={"xs"}
          date={2}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        />
      </div>
    </header>
  );
}

export default NavMenu;
