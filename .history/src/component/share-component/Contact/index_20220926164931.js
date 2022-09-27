import React from "react";
import Contact from "./Contact";
import MyContact from "./MyContact";
import { Container } from "../../Style/ContactStyle";

const About = () => {
  return (
    <Container>
      <Contact />
      <MyContact />
    </Container>
  );
};

export default About;
