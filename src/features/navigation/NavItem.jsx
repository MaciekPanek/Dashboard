import { NavLink } from "react-router-dom";

function NavItem({ to, children }) {
  return (
    <li className=" text-3xl text-neutral-500   w-full  ">
      <NavLink
        className="flex flex-row gap-3 py-2 pl-5 "
        to={to}
        activeClassName="active"
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem;
