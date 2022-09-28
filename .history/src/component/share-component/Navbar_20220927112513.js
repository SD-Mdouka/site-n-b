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
            <NavLink to="/home">Home</NavLink>
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
