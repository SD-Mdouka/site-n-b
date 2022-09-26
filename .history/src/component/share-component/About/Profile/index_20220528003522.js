/** @format */
import React from "react";
import {
  ProfileSkills,
  Profil,
  ProfiletitleSpan,
  ProfileTitle,
  SkillsDesc,
} from "./style.jsx";
import ListProf from "./ViewProfile";
import Listskilles from "./ViewSkilles";
// funcion component

const Profile = () => {
  return (
    <ProfileSkills>
      <div className="container">
        {/* Start Profil */}
        <Profil>
          <ProfileTitle>
            <ProfiletitleSpan>My </ProfiletitleSpan>Profile
          </ProfileTitle>
          {<ListProf />}
        </Profil>
        {/* End Profil */}
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
      </div>
    </ProfileSkills>
  );
};

export default Profile;
