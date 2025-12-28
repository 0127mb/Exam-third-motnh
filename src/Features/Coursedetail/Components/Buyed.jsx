import React from "react";
import styled from "./Style.module.css";
import waiting from "../../../assets/waiting.png";
import { useNavigate } from "react-router-dom";
import buyed from '../../../assets/buyed.png'
export default function Buyed() {
  const navigate = useNavigate();
  return (
    <>
      <button className={styled.X} onClick={() => navigate(-1)}>
        X
      </button>
      <div id={styled.wait}>
        <img src={buyed} alt="" className={styled.desktop} />
        <h3 className={styled.rtx4050}>Kurs muvaffaqiyatli sotib olindi</h3>
        <p style={{ color: "grey" }}>Tabriklaymiz siz kursni muvoffaqiyatli sotib oldingiz!</p>
        <div id={styled.button}>
          <button className={styled.ok} onClick={()=>navigate('/detailofcoursepage')}>Kursni ko‘rish</button>
        </div>
      </div>
    </>
  );
}
