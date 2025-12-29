import React, { use, useState } from "react";
import css from "./Profile.module.css";
import eyes from "../../../assets/eyes.png";
import { useNavigate } from "react-router-dom";
export default function Restart1() {
  const [password, sepassword] = useState();
  const [password1, sepassword1] = useState();
  const [password2, sepassword2] = useState();
  const use = useNavigate()
  return (
    <>
      <div className={css.restart}>
        <div className={css.bottom}>
          <h3>Parolni yangilash</h3>
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
          <p className={css.grey}>Yangi parol</p>
          <div className={css.show}>
            <input type={password1 ? "password" : "text"} />
            <img
              src={eyes}
              alt=""
              onClick={() => sepassword1((prev) => !prev)}
            />
          </div>
          <p className={css.grey}>Yangi parolni tasdiqlang</p>
          <div className={css.show}>
            <input type={password2?"password": 'text'} />
            <img
              src={eyes}
              alt=""
              onClick={() => sepassword2((prev) => !prev)}
            />
          </div>
        </div>
        <button className={css.bigblue} onClick={()=>use('/sms')}> Yangilash</button>
      </div>
    </>
  );
}
