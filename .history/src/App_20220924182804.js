import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./component/page/HomePage";
import "./App.css";
import ScrollImage from "./component/helpers/ScrollImage";
import AboutPage from "./component/page/AboutPage";
import ContactPage from "./component/page/ContactPage";
import ProductPage from "./component/page/ProductPage";
import ShoppingPage from "./component/page/ShoppingPage";

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
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/shop" element={<ShoppingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
