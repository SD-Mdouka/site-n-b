import React, { useEffect } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./component/page/HomePage";
import "./App.css";

const App = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <HomePage />
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/works" element={<Works />} />
          <Route path="/contact" element={<SocialFollow />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
