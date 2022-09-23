import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./component/page/HomePage";
import "./App.css";
import ScrollImage from "./component/helpers/ScrollImage";

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      ScrollImage();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route exact path="/about" element={<About />} />
          <Route exact path="/works" element={<Works />} />
          <Route path="/contact" element={<SocialFollow />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
