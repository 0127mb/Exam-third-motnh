import React from "react";
import css from "./Profile.module.css";
import new2 from "../../../assets/33.png";
import { useNavigate } from "react-router-dom";

export default function Edit() {
    const use = useNavigate()
  return (
    <>
      <div className={css.edited}>
        <div className={css.bottom}>
          <h3>Ma’lumotlarni tahrirlash</h3>
          <button className={css.x}>X</button>
        </div>

        <img src={new2} alt="" className={css.news} />

        <div className={css.div}>
          <div className={css.inputBox}>
            <p>Ism-sharifingiz</p>
            <input type="text" className={css.textInput} />
          </div>

          <div className={css.inputBox}>
            <p>Tug‘ilgan sana</p>
            <input type="date" className={css.dateInput} />
          </div>
        </div>

        <button className={css.continue1} onClick={()=>use('/profile')}>Saqlash</button>
      </div>
    </>
  );
}
