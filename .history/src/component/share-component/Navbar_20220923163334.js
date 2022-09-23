import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="navbar" onClick={(e) => e.stopPropagation()}>
        <h2>
          <a href="#" className="logo">
            Shop
          </a>
        </h2>
        <ul>
          <li>
            {/* <a href="#" className="active">
              Home
            </a> */}
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
