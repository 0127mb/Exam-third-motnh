import { useState } from "react";
import styled from "../App.module.css";
import stack from "../assets/border.png";
import half from "../assets/half.png";
import { useLocation, useNavigate } from "react-router-dom";
import eyes from "../assets/eyes.png";
import styles from "./Check.module.css";
import uzchess from "../assets/uzchess.png";
export default function Enter() {
  const navigate = useNavigate();
  const location = useLocation();
  function navigated() {
    navigate("/check", { state: { from: location.pathname } });
    if (location.pathname === "/enter") {
      navigate("/enterwithemail");
    }
  }
  function navigated1() {
    if (location.pathname === "/") {
      navigate("/check");
    }
  }
  const [password, setpassword] = useState(false);
  function setpasswordtrue() {
    setpassword((prev) => !prev);
  }
  return (
    <>
      <img src={uzchess} alt="" className={styled.img} />
      <button className={styled.x} onClick={() => navigate("/main")}>
        {" "}
        X
      </button>
      <div className={styled.allinone}>
        <div className="div">
          <div className={styled.borders}>
            <h1 className={styled.title}>Tizimga kirish</h1>
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
          <div>
            <p className={styled.name}>
              parolni kiriting{" "}
              <span onClick={() => navigate("/build")}>
                parolni unutingizmi
              </span>
            </p>

            <div className={styled.input}>
              <input
                type={password ? "text" : "password"}
                placeholder="Parolingizni kiriting"
                className={styled.number}
              />
              <img
                src={eyes}
                alt=""
                onClick={setpasswordtrue}
                className={styles.eyes}
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
            <button
              className={styled.disactiveregister}
              onClick={() => navigate("/")}
            >
              Ro‘yxatdan o‘tish
            </button>
            <div className={styled.border}>
              <img src={stack} alt="" /> yoki <img src={stack} alt="" />
            </div>
            <button
              className={styled.activeregister}
              onClick={() => navigate("/check")}
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
