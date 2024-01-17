import NavButton from "./NavButton";

function NavMenu({ setSelectedDate }) {
  return (
    <header>
      <div className="btm-nav bg-base-200 py-2">
        <NavButton size={"xs"} date={-2} setSelectedDate={setSelectedDate} />
        <NavButton size={"md"} date={-1} setSelectedDate={setSelectedDate} />
        <NavButton size={"lg"} date={0} setSelectedDate={setSelectedDate} />
        <NavButton size={"md"} date={1} setSelectedDate={setSelectedDate} />
        <NavButton size={"xs"} date={2} setSelectedDate={setSelectedDate} />
      </div>
    </header>
  );
}

export default NavMenu;
