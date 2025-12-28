import React from "react";
import next from "../../assets/next.png";
import styled from "../../App.module.css";
import { useNavigate } from "react-router-dom";
export default function Report() {
  const use = useNavigate();
  return (
    <>
      <div id={styled.dec}>
        <button className={styled.x1} onClick={() => use("/main")}>
          {" "}
          X
        </button>
        <h3 className={styled.rtx4090}>Shikoyat qilish</h3>
        <div className={styled.around}>
          <button className={styled.reports} onClick={()=>use('/for')}>
            <p> Yolg‘on va aldash</p> <img src={next} alt="" />
          </button>
          <button className={styled.reports} onClick={()=>use('for')}>
            <p> Zo‘ravonlik va dahshatli tarkib </p>
            <img src={next} alt="" />
          </button>
          <button className={styled.reports} onClick={()=>use('for')}>
            <p>
              {" "}
              O‘z joniga qasd qilish, o‘z joniga qasd qilish va xavfli
              harakatlar
            </p>{" "}
            <img src={next} alt="" />
          </button>
          <button className={styled.reports} onClick={()=>use('for')}>
            <p> Boshqa </p>
            <img src={next} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
