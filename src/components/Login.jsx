import React from "react";
import uzchess from "../assets/uzchess.png";
import half from "../assets/half.png";
import styled from "../App.module.css";
import pc from "../assets/pc.png";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const use = useNavigate()
  return (
    <>
      <img src={uzchess} alt="" className={styled.img} />
      <button className={styled.x} onClick={()=> use('/main')}> X</button>
      <div className={styled.allinone}>
        <div className={styled.math}>
          <img src={pc} alt="" />
          <h2 className={styled.h2}>
            UzChess platformasidan to‘liq foydalanish uchun tizimga kiring
          </h2>
          <p className={styled.name}>
            Platformaning barcha imkoniyatlaridan foydalanish uchun tizimga
            kirishingiz kerak
          </p>

          <button className={styled.activeregister} onClick={()=> use('/enter')}>Kirish</button>
          <button className={styled.disactiveregister}  onClick={()=>use('/')}>
            Ro‘yxatdan o‘tish
          </button>
        </div>
        <img src={half} alt="" />
      </div>
    </>
  );
}
