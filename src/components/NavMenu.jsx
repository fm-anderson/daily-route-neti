import NavButton from "./NavButton";

function NavMenu() {
  return (
    <header>
      <div className="btm-nav bg-base-200 py-2">
        <NavButton size={"xs"} date={-2} />
        <NavButton size={"md"} date={-1} />
        <NavButton size={"lg"} date={0} />
        <NavButton size={"md"} date={1} />
        <NavButton size={"xs"} date={2} />
      </div>
    </header>
  );
}

export default NavMenu;
