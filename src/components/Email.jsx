import React from "react";
import styled from "../App.module.css";
import stack from "../assets/border.png";
import half from "../assets/half.png";
import { useNavigate, useLocation } from "react-router-dom";
import uzchess from "../assets/uzchess.png";
export default function Email() {
  const navigate = useNavigate();
  const location = useLocation();
  function navigated() {
    if (location.pathname === "/email") {
      navigate("/");
    }
  }
  function navigated1() {
    navigate("/withemail", { state: { from: location.pathname } });
    if (location.pathname === "/email") {
      navigate("/withemail");
    }
  }
  return (
    <>
      <img src={uzchess} alt="" className={styled.img} />
            <button className={styled.x} onClick={()=> navigate('/main')}> X</button>
      <div className={styled.allinone}>
        <div className="div">
          <div className={styled.borders}>
            <h1 className={styled.title}>Ro‘yxatdan o‘tish</h1>
            <div className={styled.firstbutton}>
              <button className={styled.disactive} onClick={navigated}>
                Telefon raqam orqali
              </button>
              <button className={styled.active}>E-mail orqali</button>
            </div>
          </div>
          <div>
            <p className={styled.name}>Ism</p>
            <input
              type="text"
              placeholder="Ism kiriting"
              className={styled.firstinp}
            />
          </div>
          <div className={styled.secondinp}>
            <p className={styled.name}>Elektron pochta</p>

            <input
              type="text"
              placeholder="example@gmail.com"
              className={styled.input}
            />
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
            <button className={styled.disactiveregister}>Kirish</button>
          </div>
        </div>
        <img src={half} alt="" />
      </div>
    </>
  );
}
