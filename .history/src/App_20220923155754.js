import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./component/page/HomePage";

const App = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      let stars1 = document.getElementById("stars1");
      let moon2 = document.getElementById("moon2");
      let mountains3 = document.getElementById("mountains3");
      let mountains4 = document.getElementById("mountains4");
      let river5 = document.getElementById("river5");
      let boat6 = document.getElementById("boat6");
      let shop = document.querySelector(".Shop");
      let value = window.scrollY;
      stars1.style.left = value + "px";
      moon2.style.top = value * 4 + "px";
      mountains3.style.top = value * 2 + "px";
      mountains4.style.top = value * 1.5 + "px";
      river5.style.top = value + "px";
      boat6.style.top = value + "px";
      boat6.style.left = value * 3 + "px";
      shop.style.fontSize = value + "px";
      if (window.scrollY >= 67) {
        shop.style.fontSize = 67 + "px";
        shop.style.position = "fixed";
        if (window.scrollY >= 480) {
          shop.style.display = "none";
        } else {
          shop.style.display = "flex";
        }
        if (window.scrollY >= 128) {
          document.querySelector(".main").style.background =
            "linear-gradient(#376281, #10001f)";
        } else {
          document.querySelector(".main").style.background =
            "linear-gradient(#200016, #10001f)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <HomePage />
    </div>
  );
};

export default App;
