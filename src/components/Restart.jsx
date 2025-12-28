import React, { useState } from "react";
import edit from "../assets/edit.png";
import next from "../assets/next.png";
import { useLocation, useNavigate } from "react-router-dom";
import uzchess from "../assets/uzchess.png";
import styled from "../App.module.css";
import half from "../assets/half.png";
import eyes from "../assets/eyes.png";
import styles from "./Check.module.css";
export default function Restart() {
  const navigate = useNavigate();
  const Location = useLocation();
  function cantrol() {
    if (Location.pathname === "/create") {
      navigate("/Main");
      
    }
  }
  const [password, setpassword] = useState(false);
  function setpasswordtrue() {
    setpassword((prev) => !prev);
  }
  return (
    <>
      <img src={uzchess} alt="" className={styled.img} />

      <div className={styled.allinone}>
        <div className="div">
          <div className={styles.border4}>
            <button onClick={() => navigate(-1)} className={styles.back}>
              <img src={next} alt="next" />{" "}
            </button>
            <h1 className={styles.h2}>Parol qayta tiklash</h1>
          </div>

          <div className={styles.all}>
            <div className={styles.password}>
              <p className={styled.name}>parol</p>
              <div className={styled.input}>
                <input
                  type={password ? "text" : "password"}
                  placeholder="parolni qayta tiklang"
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
            <div className={styles.password}>
              <p className={styled.name}>parol</p>
              <div className={styled.input}>
                <input
                  type={password ? "text" : "password"}
                  placeholder="parolni qayta tiklang"
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
          </div>

          <button className={styles.btn} onClick={cantrol}>
            {" "}
            Tasdiqlash
          </button>
        </div>
        <img src={half} alt="" />
      </div>
    </>
  );
}
