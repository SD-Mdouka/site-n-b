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
        <Profil>
          <ProfileTitle>
            <ProfiletitleSpan>My </ProfiletitleSpan>Profile
          </ProfileTitle>
        </Profil>
        <Profil>{<ListProf />}</Profil>
        {/* End Profil */}
      </div>
    </ProfileSkills>
  );
};

export default Profile;
