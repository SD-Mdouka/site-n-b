import React from "react";
import {
  ProfileSkills,
  Profil,
  ProfiletitleSpan,
  ProfileTitle,
} from "../../../Style/AboutStyle";
import ListProf from "./ViewProfile";

const Profile = () => {
  return (
    <ProfileSkills>
      {/* Start Profil */}
      <Profil>
        <ProfileTitle>
          <ProfiletitleSpan>My </ProfiletitleSpan>Profile
        </ProfileTitle>
        {<ListProf />}
      </Profil>
      {/* End Profil */}
    </ProfileSkills>
  );
};

export default Profile;
