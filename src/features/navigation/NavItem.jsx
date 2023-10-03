import { NavLink } from "react-router-dom";

function NavItem({ to, children }) {
  return (
    <li className=" text-3xl text-neutral-500 mb-5 ">
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
}

export default NavItem;
