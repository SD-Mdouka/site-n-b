/** @format */
import React from "react";
import {
  AboutInfo,
  AboutSection,
  TitleSection,
  TitleSpan,
  Directly,
  InfoDesc,
  LinkDesc,
} from "./style.jsx";
// funcion component
const About = () => {
  return (
    <AboutSection>
      <div className="container">
        <AboutInfo>
          <TitleSection>
            <TitleSpan>This is</TitleSpan> Me
          </TitleSection>
          <Directly>About Director</Directly>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            <LinkDesc>explicabo</LinkDesc> maxime quibusdam quaerat nihil
            aliquid aperiam deleniti, repellendus dolorum. Possimus nisi
            cupiditate ad veritatis?
          </InfoDesc>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </InfoDesc>
        </AboutInfo>
      </div>
    </AboutSection>
  );
};

export default About;
