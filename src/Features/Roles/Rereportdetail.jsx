import React from "react";
import next from "../../assets/next.png";
import styled from "../../App.module.css";
import { useNavigate } from "react-router-dom";
export default function Rereportdetail() {
    const use = useNavigate()
  return (
    <>
      <div id={styled.dec}>
        <button className={styled.x1} onClick={() => use("/main")}>
          {" "}
          X
        </button>
        <h3 className={styled.rtx4090}>Shikoyat qilish</h3>
        <div className={styled.around1}>
          <div className="div">
            <select name="" id={styled.seleceted}>
              <option value="">Yolg‘on va aldash</option>
              <option value="">Zo‘ravonlik va dahshatli tarkib</option>
              <option value="">
                O‘z joniga qasd qilish, o‘z joniga qasd qilish va xavfli
                harakatlar
              </option>
              <option value="">Boshqa</option>
            </select>
            <h3 className={styled.displayflex}>
              shikoyat matini <p style={{ color: "grey" }}>(ixtiyoriy)</p>{" "}
            </h3>
            <input type="text" className={styled.reportedspeech} placeholder="yolgon va aldov"/>
            <div className={styled.buttoned}>
              <button className={styled.reporterbutton} onClick={()=>use(-1)}>Bekor qilish</button>
              <button className={styled.reportedbutton1}  onClick={()=>use('/detailofcoursepage')}> Yuborish</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
