import {
  ListProfile,
  ItemProfile,
  ItemSpan,
  ItemSpanweb,
} from "../../../Style/AboutStyle";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ListProf = () => {
  const [profil, setProfile] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setProfile(res.data.myprofile);
    });
  }, []);
  const MyProfile = profil.map((profilItme) => {
    return (
      // grid-template-areas: "SectionTitle ." "firstName LastName" "EmailAdresse PhoneNumber" "ProjectTitle SelectedOption" "UserMessage UserMessage";
      <ListProfile key={profilItme.id}>
        <ItemProfile className="Image">
          <img src={profilItme.image} alt="" />
        </ItemProfile>
        <ItemProfile className="Name">
          <ItemSpan>Name</ItemSpan>
          {profilItme.name}
        </ItemProfile>
        <ItemProfile className="Formation">
          <ItemSpan>Formation</ItemSpan>
          {profilItme.Formation}
        </ItemProfile>
        <ItemProfile className="PareFeu">
          <ItemSpan>Pare-feu</ItemSpan>
          {profilItme.PareFeu}
        </ItemProfile>
        <ItemProfile className="Stratege">
          <ItemSpan>Stratège</ItemSpan>
          {profilItme.Stratege}
        </ItemProfile>
        <ItemProfile className="JeunesMorocco">
          <ItemSpan>«#Jeunes Morocco»</ItemSpan>
          {profilItme.JeunesMorocco}
        </ItemProfile>
        <ItemProfile className="website">
          <ItemSpan>Website</ItemSpan>
          <ItemSpanweb> {profilItme.website}</ItemSpanweb>
        </ItemProfile>
      </ListProfile>
    );
  });
  return MyProfile;
};
export default ListProf;
