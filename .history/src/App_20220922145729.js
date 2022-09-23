import React from "react";
import "./App.css";

function App() {
  return (
    <div className="">
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
      <section className="main">
        <img src="./stars1.png" alt="stars1" id="stars1" />
        <h2 className="Shop">Shop</h2>
        <img src="./moon2.png" alt="moon2" id="moon2" />
        <img src="./mountains3.png" alt="mountains3" id="mountains3" />
        <img src="./mountains4.png" alt="mountains4" id="mountains4" />
        <img src="./river5.png" alt="river5" id="river5" />
        <img src="./boat6.png" alt="boat6" id="boat6" />
        <img src="./mountains7.png" alt="mountains3" id="mountains7" />
      </section>
    </div>
  );
}

export default App;
