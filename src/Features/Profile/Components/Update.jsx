import React, { use, useState } from "react";
import css from "./Profile.module.css";
import eyes from "../../../assets/eyes.png";
import { useNavigate } from "react-router-dom";
export default function Update() {
  const [password, sepassword] = useState();
  const use = useNavigate();
  return (
    <>
      <div className={css.restart}>
        <div className={css.bottom}>
          <h3>Telefon raqamni yangilash</h3>
          <button className={css.x}>X</button>
        </div>
        <div className={css.inputs}>
          <p className={css.grey}>Hozirgi parol</p>
          <div className={css.show}>
            <input type={password ? "password" : "text"} />
            <img
              src={eyes}
              alt=""
              onClick={() => sepassword((prev) => !prev)}
            />
          </div>
          <p className={css.grey}>Yangi telefon raqamingizni kiriting</p>
          <div className={css.show}>
            <p className={css.white}>+998</p>
            <input type="number" />
          </div>
        </div>
        <button className={css.bigblue} onClick={() => use("/sms")}>
          {" "}
          Davom ettirish
        </button>
      </div>
    </>
  );
}
