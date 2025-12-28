import React from "react";
import styled from "../App.module.css";
import stack from "../assets/border.png";
import half from "../assets/half.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import uzchess from "../assets/uzchess.png";
export default function Build() {
  const navigate = useNavigate();
  const location = useLocation();
  function navigated() {
    navigate("/email", { state: { from: location.pathname } });
    if (location.pathname === "/build") {
      navigate("/buildwithemail");
    }
  }
  function navigated1() {
    if (location.pathname === "/") {
      navigate("/check");
    } else if (location.pathname === "/") {
      navigate("/enter");
    }
  }
  return (
    <>
      <img src={uzchess} alt="" className={styled.img} />{" "}
      <button className={styled.x} onClick={() => navigate("/main")}>
        {" "}
        X
      </button>
      <div className={styled.allinone}>
        <div className={styled.monster}>
          <div className={styled.borders}>
            <h1 className={styled.title}>Parolni tiklash</h1>
            <div className={styled.firstbutton}>
              <button className={styled.active}>Telefon raqam orqali</button>
              <button className={styled.disactive} onClick={navigated}>
                E-mail orqali
              </button>
            </div>
          </div>
          <div className={styled.secondinp}>
            <p className={styled.name}>Telefon raqam</p>
            <div className={styled.input}>
              <p className={styled.numberofinp}>+998</p>
              <input
                type="number"
                placeholder="__ ___ __ __"
                className={styled.number}
              />
            </div>
          </div>

          <div className="registerbuttons">
            <button
              className={styled.activeregister1}
              onClick={() => navigate("/pass")}
            >
              Davom etish
            </button>
          </div>
        </div>
        <img src={half} alt="" />
      </div>
    </>
  );
}
