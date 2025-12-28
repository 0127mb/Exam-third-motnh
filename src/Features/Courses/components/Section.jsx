import React from "react";
import home from "../assets/home 1.png";
import styled from '../index.module.css'
export default function Section({ label }) {
  return (
    <div className={styled.header2}>
      <img src={home} alt="" />
      <a href="">Asosiy</a>
      <img src={label} alt="" />
      <h4>Kutubxona</h4>
    </div>
  );
}
