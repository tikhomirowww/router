import React from "react";
import { Link, NavLink } from "react-router-dom";
import { navs } from "./consts";

const Navbar = () => {
  return (
    <nav>
      {navs.map((item, index) => (
        <NavLink key={index} to={item.path}>
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
