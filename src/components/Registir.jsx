import React from "react";
import styled from "../App.module.css";
import stack from "../assets/border.png";
import half from "../assets/half.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
export default function Registir() {
  const navigate = useNavigate();
  const location = useLocation();
  function navigated() {
    navigate("/email", { state: { from: location.pathname } });
    if (location.pathname === "/") {
      navigate("/email");
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
      <button className={styled.x} onClick={() => navigate("/main")}>
        {" "}
        X
      </button>
      <div className={styled.allinone}>
        <div className="div">
          <div className={styled.borders}>
            <h1 className={styled.title}>Ro‘yxatdan o‘tish</h1>
            <div className={styled.firstbutton}>
              <button className={styled.active}>Telefon raqam orqali</button>
              <button className={styled.disactive} onClick={navigated}>
                E-mail orqali
              </button>
            </div>
          </div>
          <div>
            <p className={styled.name}>Ism-sharifingiz</p>
            <input
              type="text"
              placeholder="Ism-sharifingizini kiriting"
              className={styled.firstinp}
            />
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
          <div className={styled.agree}>
            Ro‘yxatdan o‘tish tugmasini bosgach foydalanish{" "}
            <a href="" className={styled.href}>
              shartlari va qoidalarini
            </a>{" "}
            qabul qilaman
          </div>

          <div className="registerbuttons">
            <button className={styled.activeregister} onClick={navigated1}>
              Ro‘yxatdan o‘tish
            </button>
            <div className={styled.border}>
              <img src={stack} alt="" /> yoki <img src={stack} alt="" />
            </div>
            <button
              className={styled.disactiveregister}
              onClick={() => navigate("/enter")}
            >
              Kirish
            </button>
          </div>
        </div>
        <img src={half} alt="" />
      </div>
    </>
  );
}
