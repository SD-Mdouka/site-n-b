/** @format */
import { ListProfile, ItemProfile, ItemSpan, ItemSpanweb } from "./style.jsx";
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
          <ItemSpan>Name</ItemSpan>
          {profilItme.name}
        </ItemProfile>
        <ItemProfile>
          <ItemSpan>Birthday</ItemSpan>
          {profilItme.birthday}
        </ItemProfile>
        <ItemProfile>
          <ItemSpan>Address</ItemSpan>
          {profilItme.address}
        </ItemProfile>
        <ItemProfile>
          <ItemSpan>Phone</ItemSpan>
          {profilItme.phone}
        </ItemProfile>
        <ItemProfile>
          <ItemSpan>Email</ItemSpan>
          {profilItme.email}
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
