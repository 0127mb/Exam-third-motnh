import React from "react";
import css from "./Profile.module.css";
import leave from "../../../assets/leave.png";
import { useNavigate } from "react-router-dom";
export default function Leave() {
    const use = useNavigate()

  return (
    <>
      <div className={css.leave}>
        <div className={css.bottom}>
          <h3>Tzimdan chiqish</h3>
          <button className={css.x}>X</button>
        </div>
        <div className={css.agree}>
          <button className={css.lefted}>
            {" "}
            <img src={leave} alt="" className={css.red} />
          </button>
          <h3 className={css.accep}>
            Rostan ham tizimdan chiqishni tasdiqlaysizmi?
          </h3>
        </div>
        <div className={css.buttons}>
          <button className={css.canceled} onClick={()=>use(-1)}>Bekor qilish</button>
          <button className={css.continue} onClick={()=>use('/')}>Davom etish</button>
        </div>
      </div>
    </>
  );
}
