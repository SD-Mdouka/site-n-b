import React from "react";
import {
  ProfileSkills,
  Profil,
  ProfiletitleSpan,
  ProfileTitle,
  SkillsDesc,
} from "../../../Style/AboutStyle";
import ListProf from "./ViewProfile";

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
      </div>
    </ProfileSkills>
  );
};

export default Profile;
