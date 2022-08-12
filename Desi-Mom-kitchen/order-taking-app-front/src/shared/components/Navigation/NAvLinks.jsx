import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Main Page
        </NavLink>
      </li>
      <li>
        <NavLink to="/auth">Clock-In</NavLink>
      </li>
      <li>
        <NavLink to="/dine-in">Dine-in Orders</NavLink>
      </li>
      <li>
        <NavLink to="/online">Online Orders</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
