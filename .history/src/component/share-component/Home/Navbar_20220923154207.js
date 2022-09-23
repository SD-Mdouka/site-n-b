import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <h2>
          <a href="#" className="logo">
            Shop
          </a>
        </h2>
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
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

export default Header;
