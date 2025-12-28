import React, { useState } from "react";
import Header from "../main/components/Header";
import Section from "./Components/Section";
import sertificat from "../../assets/Sertifikat.png";
import star from "../../assets/star.png";
import yellow from "../../assets/yellow.png";
import styled from "../../App.module.css";
import Footer from "../main/components/Footer";
import Advert from '../../assets/Advert.png'
import { useNavigate } from "react-router-dom";
export default function Sertifikat() {
    const use = useNavigate()
  const [get, setget] = useState(false);
  const [get1, setget1] = useState(false);
  const [get2, setget2] = useState(false);
  const [get3, setget3] = useState(false);
  const [get4, setget4] = useState(false);
  return (
    <>
      <Header></Header>

      <Section></Section>
      <img src={sertificat} alt="" />
      <div className={styled.getpoint}>
        <h3>Kursga baho bering</h3>
        <div className="imgs"><img
          src={get ? yellow : star}
          alt=""
          onClick={() => setget((prev) => !prev)}
        />
        <img
          src={get1 ? yellow : star}
          alt=""
          onClick={() => setget1((prev) => !prev)}
        />
        <img
          src={get2 ? yellow : star}
          alt=""
          onClick={() => setget2((prev) => !prev)}
        />
        <img
          src={get3 ? yellow : star}
          alt=""
          onClick={() => setget3((prev) => !prev)}
        />
        <img
          src={get4 ? yellow : star}
          alt=""
          onClick={() => setget4((prev) => !prev)}
        /></div>
        <p>ism</p>
        <input type="text" className={styled.area} /> <br /> <br />
        <button className={styled.send} onClick={()=>use('/report')}>Yuborish</button>
      </div>
      <img src={Advert} alt="" className={styled.Advert} />
      <Footer></Footer>
    </>
  );
}
