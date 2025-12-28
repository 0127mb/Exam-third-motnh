import React from "react";
import get from "../../../assets/getsertifikat.png";
import style from '../../../App.module.css'
import { useNavigate } from "react-router-dom";
export default function Award() {
    const mavigate = useNavigate()
  return (
    <>
      <img src={get} alt="" className={style.Awards} onClick={()=>mavigate('/sertifikat')}/>
    </>
  );
}
