import NavItem from "./NavItem";

// import {
//   HiOutlineHome,
//   HiOutlineHomeModern,
//   HiOutlineUsers,
//   HiOutlineCog6Tooth,
// } from "react-icons/hi";

function Navbar() {
  return (
    <>
      <nav className="bg-stone-100 h-screen w-1/6 flex items-start  flex-col gap-20  ">
        <div className="flex items-center gap-5 border-b-2 border-b-neutral-300 py-5 w-full pl-12  ">
          <img
            src="photo.jpeg"
            className="w-20 h-20 rounded-full object-fit  "
          />
          <p className="text-3xl text-neutral-700 ">Name</p>
        </div>
        <ul className="flex flex-col items-start pl-12  border-b-2 border-b-neutral-300  w-full pb-10 ">
          <NavItem to="/">
            <span>Home</span>
          </NavItem>
          <NavItem to="/reservations">
            <span>Reservations</span>
          </NavItem>
          <NavItem to="/villas">
            <span>Villas</span>
          </NavItem>
          <NavItem to="/guests">
            <span>Guests</span>
          </NavItem>
          <NavItem to="/settings">
            <span>Settings</span>
          </NavItem>
          <NavItem to="/">
            <span>Home</span>
          </NavItem>
          <NavItem to="/reservations">
            <span>Reservations</span>
          </NavItem>
          <NavItem to="/villas">
            <span>Villas</span>
          </NavItem>
          <NavItem to="/guests">
            <span>Guests</span>
          </NavItem>
          <NavItem to="/settings">
            <span>Settings</span>
          </NavItem>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
