/** @format */

import styled from "styled-components";
/*
    ===============================
       Profile + Skills Styles
    ===============================
*/
/*Start Profile global*/

export const ProfileSkills = styled.div`
  padding: 50px 0;
  overflow: hidden;
  color: #fff;
`;
/*Start profil */
export const Profil = styled.div`
  float: none;
  @media (max-width: 768px) {
    width: 100%;
    float: none;
    margin-bottom: 20px;
  }
`;

export const ListProfile = styled.ul`
  list-style: none;
  display: flex;
`;

export const ItemProfile = styled.li`
  margin-bottom: 8px;
`;

export const ItemSpan = styled.span`
  display: block;
  width: 100px;
  font-weight: bold;
`;

export const ItemSpanweb = styled.span`
  font-weight: normal;
  color: #eb5424;
`;
export const ProfileTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
`;

export const ProfiletitleSpan = styled.span`
  font-weight: normal;
`;
/*End profile */
/*Start Skilles */
export const SkillsDesc = styled.p`
  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px;
`;
/*Skille in progress */
export const BarProgess = styled.div`
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 10px;
`;

export const TitelProgress = styled.span`
  float: left;
`;

export const Pourcentage = styled.span`
  float: right;
  margin-right: 100px;
`;

export const Progress = styled.div`
  height: 2px;
  clear: both;
  background: #f8f8f8;
  position: relative;
  top: 5px;
`;

export const VolumProgress = styled.div`
  background: #eb5424;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${(props) => (props.porc === "100%" ? "100%" : "")};
  width: ${(props) => (props.porc === "50%" ? "50%" : "")};
  width: ${(props) => (props.porc === "60%" ? "60%" : "")};
`;

export const ProgOwn = styled.span`
  width: 100%;
`;

export const ProgTow = styled.span`
  width: 90%;
`;
export const ProgThre = styled.span`
  width: 80%;
`;
