import React, { version } from "react";
import video from "../assets/video.png";
import data from "./Data";
import style from "../App.module.css";
import styled from "../index.module.css";
import img from "../assets/boolen.png";
import full from "../assets/full15.png";
import full2 from "../assets/full16.png";
import full3 from "../assets/full17.png";
import full4 from "../assets/full18.png";
import full5 from "../assets/full19.png";
import { useNavigate } from "react-router-dom";

export default function Left() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styled.inday}>
        <div className={styled.inside}>
          <div className={styled.head}>
            <h3>Kun o‘yini</h3>
            <span>Ko‘rish</span>
          </div>
          <img src={video} alt="" /> <br />
          <img src={img} alt="" />
        </div>
        <div className={styled.reyting2}>
          <p className={styled.name}>
            <h3>Reyting </h3>
            <a href="/game">Barchasi</a>
          </p>
          <img src={full} alt="" />
          <img src={full2} alt="" />
          <img src={full3} alt="" />
          <img src={full4} alt="" />
          <img src={full5} alt="" />
        </div>
      </div>
    </>
  );
}
