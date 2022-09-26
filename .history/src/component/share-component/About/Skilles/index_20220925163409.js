import React from "react";
import {
  Profil,
  ProfiletitleSpan,
  ProfileTitle,
  SkillsDesc,
} from "../../../Style/AboutStyle";
import Listskilles from "./ViewSkilles";

const Skilles = () => {
  return (
    <>
      {/* Start skille in profile */}
      <Profil>
        <ProfileTitle>
          Some <ProfiletitleSpan>skills</ProfiletitleSpan>
        </ProfileTitle>
        <SkillsDesc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          praesentium blanditiis esse cupiditate, omnis similique.
        </SkillsDesc>
        <Listskilles />
      </Profil>
      {/* End skille in profile */}
    </>
  );
};

export default Skilles;
