import React from "react";
import Header from "../main/components/Header";
import eror from "../../assets/404.png";
import board from "../../assets/Board.png";
import { useNavigate } from "react-router-dom";

export default function Error404() {
  const nvigate = useNavigate()
  return (
    <>
      <Header></Header>
      <div className="erorloads">
        <img src={eror} alt="" className="Erorload"  onClick={()=>nvigate('/main')}/>
        <img src={board} alt="" className="Erorload1" />
      </div>
    </>
  );
}
