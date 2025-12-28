import React from "react";
import styled from "./Style.module.css";
import waiting from "../../../assets/waiting.png";
import { useNavigate } from "react-router-dom";
export default function Waiting() {
  const navigate = useNavigate();
  function cantrolnavigate2() {
    setTimeout(() => {
      navigate("/error");
    }, 4000);
  }
  function cantrolnavigate() {
    setTimeout(() => {
      navigate("/buyed");
    }, 5000);
  }
  cantrolnavigate2();
  cantrolnavigate();
  return (
    <>
      <button className={styled.X} onClick={() => navigate(-1)}>
        X
      </button>
      <div id={styled.wait}>
        <img src={waiting} alt="" className={styled.desktop} />
        <h3 className={styled.rtx4050}>Jarayonda...</h3>
        <p style={{ color: "grey" }}>To‘lov amalga oshish jarayonida</p>
        <div id={styled.button}>
          <button className={styled.ok}>Tushunarli</button>
        </div>
      </div>
    </>
  );
}
