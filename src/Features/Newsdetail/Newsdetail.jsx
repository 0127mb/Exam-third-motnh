import React from "react";
import Header from "../main/components/Header";
import Footer from "../main/components/Footer";
import Section from "./Components/Section";
import big from "../../assets/big.png";
import three from "../../assets/three.png";
import style from "./Components/Style.module.css";
import { useNavigate } from "react-router-dom";
import Adver from "../../assets/Adver.png";
export default function Newsdetail() {
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>

      <Section></Section>

      <img src={big} alt="" />
      <div id="news">
        <div id={style.named}>
          <h3>O‘xshash yangiliklar</h3>
          <span onClick={() => navigate(-1)}>Barcha yangiliklar</span>
        </div>
        <img src={three} alt="" />
      </div>
      <img src={Adver} alt="" className={style.adver} />

      <Footer></Footer>
    </>
  );
}
