
import React from "react";
import styled from "./Style.module.css";
import waiting from "../../../assets/waiting.png";
import { useNavigate } from "react-router-dom";
import buyed from "../../../assets/error.png";

export default function Errorpage() {
  const navigate = useNavigate();
  return (
    <>
      <button className={styled.X} onClick={() => navigate(-1)}>
        X
      </button>
      <div id={styled.wait}>
        <img src={buyed} alt="" className={styled.desktop} />
        <h3 className={styled.rtx4050}>Xatolik yuz berdi</h3>
        <p style={{ color: "grey" }} className={styled.error}>
          Kursni sotib olish jarayonida xatolik yuz berdi. Iltimos qayta urunib
          ko‘ring
        </p>
        <div id={styled.button}>
          <button
            className={styled.ok}
            onClick={() => navigate("/detailofcoursepage")}
          >
            Qayta urunib ko‘rish
          </button>
        </div>
      </div>
    </>
  );
}
