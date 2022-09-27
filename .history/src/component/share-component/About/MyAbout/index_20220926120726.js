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
} from "./style";
// funcion component
const About = () => {
  return (
    <AboutSection>
      <div className="container">
        <AboutInfo>
          <TitleSection>
            <TitleSpan>
              M.A. GLOBAL CONSULTING > THE LEGAL 500 RANKINGS
            </TitleSpan>
          </TitleSection>
          <Directly>About Director</Directly>
          <InfoDesc>
            <LinkDesc src="https://www.legal500.com/firms/235494-ma-global-consulting/234938-casablanca-morocco/">
              M.A. Global Consulting
            </LinkDesc>
            works in partnership with international tax consultancy Andersen
            Global, bringing to bear the strength of its large tax team to
            handle cross-border matters for businesses with interests in
            Morocco. Managing partner Mehdi El Attar and specialist tax partner
            Manar Fadriq have in-depth knowledge of local and international tax
            laws.
          </InfoDesc>
          <InforDesc>
            Lago has also served as the Director of the Boston Redevelopment
            Authority and Chief Economic Development Officer for the City of
            Boston, President and CEO of the Empire State Development
            Corporation, Director of the Office of International Affairs for the
            U.S.
          </InforDesc>
        </AboutInfo>
      </div>
    </AboutSection>
  );
};

export default About;
