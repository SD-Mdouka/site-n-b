/** @format */
import axios from "axios";
import React, { Component } from "react";
import { SocialMedi, Social, Icon, TextInfo, Info, Info2 } from "./style.jsx";
// funcion component

class SocialMedia extends Component {
  state = {
    social: [],
  };
  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      this.setState({ social: res.data.social });
    });
  }
  render() {
    const { social } = this.state;
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
  }
}

export default SocialMedia;
