import React from "react";
import "./App.css";

function App() {
  return (
    <div className="">
      <header>
        <h2>
          <a href="#" className="logo">
            E-commerce
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
    </div>
  );
}

export default App;
