import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="navbar" onClick={(e) => e.stopPropagation()}>
        <h2>
          <a href="/" className="logo">
            Shop
          </a>
        </h2>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/">
              Contact
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
