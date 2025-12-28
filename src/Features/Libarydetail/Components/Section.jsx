import React from "react";
import home from "../../../assets/home 1.png";
import styled from "./css.module.css";
export default function Section({ label }) {
  return (
    <div className={styled.header5}>
      <img src={home} alt="" />
      <a href="">Asosiy</a>
      <img src={label} alt="" />
     <a href="">Kutubxona</a>
     <h4>Shaxmatdagi qobiliyatliringizga qayta baxo bering</h4>
    </div>
  );
}