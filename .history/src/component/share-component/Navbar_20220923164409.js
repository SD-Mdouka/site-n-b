import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="navbar" onClick={(e) => e.stopPropagation()}>
        <h2>
          <NavLink exact to="/" className="logo">
            Shop
          </NavLink>
        </h2>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/product">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/shop">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
