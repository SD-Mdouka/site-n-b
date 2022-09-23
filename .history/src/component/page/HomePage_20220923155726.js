import React from "react";
import Content from "../share-component/Home/Content";
import Main from "../share-component/Home/Main";
import { HomeLayout } from "../share-component/Layout/HomeLayout";

const HomePage = () => {
  return (
    <>
      <HomeLayout>
        <Main />
        <Content />
      </HomeLayout>
    </>
  );
};

export default HomePage;
