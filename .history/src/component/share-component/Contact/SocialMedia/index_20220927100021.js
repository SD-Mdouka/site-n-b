import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  SocialMedi,
  Social,
  Icon,
  TextInfo,
  Info,
  Info2,
} from "../../../Style/styleContact";
// funcion component

const SocialMedia = () => {
  const [social, setSocial] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setSocial(res.data.social);
    });
  }, []);
  const ListSocial = social.map((itemSocail) => {
    return (
      <Social item={itemSocail.id} key={itemSocail.id}>
        <Icon className={itemSocail.icon}></Icon>
        <TextInfo>
          <Info>{itemSocail.title}</Info>
          <Info2>{itemSocail.body}</Info2>
        </TextInfo>
      </Social>
    );
  });
  return <SocialMedi>{ListSocial}</SocialMedi>;
};
export default SocialMedia;
