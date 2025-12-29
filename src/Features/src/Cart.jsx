import React from "react";
import Carditem from "./Components/Carditem";
import Data from "./Components/Data";
import Header from "../main/components/Header";
import Footer from "../main/components/Footer";
import style from "./App.module.css";
import adver from "../../assets/Adver.png";
import Section from "../../Features/Courses/components/Section";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const usse = useNavigate();
  return (
    <>
      <Header></Header>
      <Section></Section>
      <Carditem
        img={Data[0].img}
        name={Data[0].name}
        price={Data[0].pricenow}
        discount={Data[0].discount}
        button1={Data[0].plusbutton}
        button2={Data[0].minusbutton}
        remove={Data[0].deletebutton}
      ></Carditem>
      <Carditem
        img={Data[1].img}
        name={Data[1].name}
        price={Data[1].pricenow}
        discount={Data[1].discount}
        button1={Data[1].plusbutton}
        button2={Data[1].minusbutton}
        remove={Data[1].deletebutton}
      ></Carditem>
      <Carditem
        img={Data[2].img}
        name={Data[2].name}
        price={Data[2].pricenow}
        discount={Data[2].discount}
        button1={Data[2].plusbutton}
        button2={Data[2].minusbutton}
        remove={Data[2].deletebutton}
      ></Carditem>

      <div className={style.Advert}>
        <div className={style.row}>
          <span>To‘lov narxi:</span>
          <span>1 560 000.00 UZS</span>
        </div>

        <div className={style.row}>
          <span>Chegirma:</span>
          <span>1 560 00.00 UZS (10%)</span>
        </div>

        <div className={style.row}>
          <span>Kupon:</span>
          <span>0 UZS</span>
        </div>

        <div className={style.row}>
          <span>Yetkazib berish</span>
          <span>0 UZS</span>
        </div>

        <div className={`${style.row} ${style.total}`}>
          <span>Jami:</span>
          <span>1 404 000.00 UZS</span>
        </div>

        <div className={style.kupon}>
          <label>Kupon</label>
          <input type="text" placeholder="Kupondagi kodni kiriting" />
          <button className={style.btn} onClick={() => usse("/fill")}>
            Rasmiylashtirish
          </button>
        </div>
      </div>
      <img src={adver} alt="" className={style.Advert2} />

      <Footer></Footer>
    </>
  );
}
