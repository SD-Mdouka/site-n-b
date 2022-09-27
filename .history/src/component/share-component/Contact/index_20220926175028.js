import React from "react";
import Contact from "./Contact";
import MyContact from "./MyContact";
import { Container } from "../../Style/ContactStyle";
import "./style.css";
import SocialMedia from "./SocialMedia";

const About = () => {
  return (
    <Container>
      <Contact />
      <MyContact />
      <SocialMedia />
    </Container>
  );
};

export default About;
