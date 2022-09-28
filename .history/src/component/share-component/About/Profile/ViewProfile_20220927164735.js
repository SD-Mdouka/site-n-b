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
      <ListProfile key={profilItme.id}>
        <ItemProfile>
          <img src={profilItme.image} alt="" />
        </ItemProfile>
        <ItemProfile>
          <ItemSpan>Name</ItemSpan>
          {profilItme.name}
        </ItemProfile>
        <ItemProfile>
          <ItemSpan>Formation</ItemSpan>
          {profilItme.Formation}
        </ItemProfile>
        <ItemProfile>
          <ItemSpan>Pare-feu</ItemSpan>
          {profilItme.PareFeu}
        </ItemProfile>
        <ItemProfile>
          <ItemSpan>Stratège</ItemSpan>
          {profilItme.Stratege}
        </ItemProfile>
        <ItemProfile>
          <ItemSpan>«#Jeunes Morocco»</ItemSpan>
          {profilItme.JeunesMorocco}
        </ItemProfile>
        <ItemProfile>
          <ItemSpan>Website</ItemSpan>
          <ItemSpanweb> {profilItme.website}</ItemSpanweb>
        </ItemProfile>
      </ListProfile>
    );
  });
  return MyProfile;
};
export default ListProf;
