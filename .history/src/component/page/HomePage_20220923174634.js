import React from "react";
import Content from "../share-component/Home/Content";
import Main from "../share-component/Home/Main";
import { Layout } from "../share-component/Layout/Layout";
import "../Style/StyleHome.css";

const topScroll = () => {};

const HomePage = () => {
  return (
    <>
      <Layout>
        <Main />
        <Content />
      </Layout>
      <button onclick={() => topScroll()} id="btnScroll">
        Top
      </button>
    </>
  );
};

export default HomePage;
