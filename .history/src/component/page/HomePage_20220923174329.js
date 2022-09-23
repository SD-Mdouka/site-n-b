import React from "react";
import Content from "../share-component/Home/Content";
import Main from "../share-component/Home/Main";
import { Layout } from "../share-component/Layout/Layout";
import "../Style/StyleHome.css";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Main />
        <Content />
      </Layout>
      <button onclick="topFunction()" id="myBtn" title="Go to top">
        Top
      </button>
    </>
  );
};

export default HomePage;
