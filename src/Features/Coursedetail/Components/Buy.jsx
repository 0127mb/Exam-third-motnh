import React, { useState } from "react";
import styled from "./Style.module.css";
import desktop from "../../../assets/desktop.png";
import paypal from "../../../assets/paypal.png";
import payme from "../../../assets/payme.png";
import click from "../../../assets/click.png";
import uzum from "../../../assets/uzum.png";
import buying from "../../../assets/buying.png";
import { useNavigate } from "react-router-dom";
export default function Buy() {
  const [radio, setradio] = useState(false);
  const [radio1, setradio1] = useState(false);
  const [radio2, setradio2] = useState(false);
  const [radio3, setradio3] = useState(false);
  const navigate = useNavigate();
  function state() {
    setradio((prev) => !prev);
    if (radio1 && radio2 && radio3) {
      setradio1(false);
      setradio2(false);
      setradio3(false);
    }
  }
  function state1() {
    setradio1((prev) => !prev);
    if (radio && radio2 && radio3) {
      setradio(false);
      setradio2(false);
      setradio3(false);
    }
  }
  function state2() {
    setradio2((prev) => !prev);
    if (radio1 && radio && radio3) {
      setradio1(false);
      setradio(false);
      setradio3(false);
    }
  }
  function state3() {
    setradio3((prev) => !prev);
    if (radio1 && radio2 && radio) {
      setradio1(false);
      setradio2(false);
      setradio(false);
    }
  }

  return (
    <>
      <button className={styled.X} onClick={() => navigate(-1)}>
        X
      </button>
      <div id={styled.choose}>
        <div id={styled.dided}>
          <img src={desktop} alt="" className={styled.desktop3} /> <br />
          <img src={buying} alt="" />
        </div>
        <p>To‘lov usulini tanlang</p>
        <div id={styled.choosed}>
          <div id={radio ? styled.true : styled.input}>
            <img src={paypal} alt="" />
            <input type="radio" onClick={state} className={styled.radio} />
          </div>
          <div id={radio1 ? styled.true : styled.input}>
            <img src={payme} alt="" />
            <input type="radio" onClick={state1} className={styled.radio} />
          </div>
          <div id={radio2 ? styled.true : styled.input}>
            <img src={click} alt="" />
            <input type="radio" onClick={state2} className={styled.radio} />
          </div>
          <div id={radio3 ? styled.true : styled.input}>
            <img src={uzum} alt="" />
            <input type="radio" onClick={state3} className={styled.radio} />
          </div>
        </div>

        <div id={styled.button}>
          <button className={styled.canceled}>bekor qilish</button>
          <button className={styled.continue} onClick={() => navigate("/wait")}>
            davom etish
          </button>
        </div>
      </div>
    </>
  );
}
