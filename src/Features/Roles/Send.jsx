import React, { useState } from "react";
import next from "../../assets/next.png";
import styled from "../../App.module.css";
import { useNavigate } from "react-router-dom";
import soical from "../../assets/soical.png";
import copy from "../../assets/copy.png";
export default function Send() {
  const use = useNavigate()
  return (
    <>
      <div id={styled.dec4}>
        <button className={styled.x1} onClick={() => use("/main")}>
          {" "}
          X
        </button>
        <h3 className={styled.rtx4090}>Ulashish</h3>
        <div className={styled.around2}>
          <img src={soical} alt="" className={styled.rtx5090} />
          <div className={styled.send3}>
            http://localhost:5173/login <img src={copy} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
