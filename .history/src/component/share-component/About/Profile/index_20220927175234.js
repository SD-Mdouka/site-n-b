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
      <div className="container">
        {/* Start Profil */}
        <ProfileTitle>
          <ProfiletitleSpan>My </ProfiletitleSpan>Profile
        </ProfileTitle>
        {<ListProf />}
        {/* End Profil */}
      </div>
    </ProfileSkills>
  );
};

export default Profile;
