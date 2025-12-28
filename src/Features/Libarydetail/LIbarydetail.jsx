import React from "react";
import { useState } from "react";
import ot from "../../assets/ot3.png";
import Header from "../main/components/Header";
import price from "../../assets/price.png";
import info from "../../assets/Info.png";
import data from "../src/component/Data";
import { useNavigate } from "react-router-dom";
import css from "./Components/css.module.css";
import Section from "./Components/Section";
export default function LIbarydetail() {
  const [liked, setliked] = useState(false);
  const navigate = useNavigate();
  const [added, setadded] = useState(false);
  return (
    <>
      <Header></Header>
      <Section></Section>
      <div id={css.dovud}>
        <div className={css.div}>
          {" "}
          <img src={ot} alt="" />
          <div className={css.div999}>
            <h1>Shaxmatdagi qobiliyatlaringizga qayta baxo bering</h1> <br />{" "}
            <img src={price} alt="" className={css.imgs} /> <br />
            <img src={info} alt="" className={css.imgs} />
          </div>
        </div>{" "}
        <button
          onClick={() => setadded(!added)}
          style={{
            backgroundColor: added ? "grey" : "rgba(28, 146, 224, 1)",
            color: "white",
          }}
          className={css.btn}
        >
          {data[4].button}
          <img src={data[4].btn} alt="" />
        </button>
        <div className={css.aboutbook}>
          <h3 className={css.h4}>Kitob haqida</h3>
          <p className={css.grey}>
            Shaxmatni qanday qayta baholash kerak, uzoq vaqtdan beri zamonaviy
            klassika hisoblangan. Ushbu 4-nashr Silmanning nomutanosiblik
            haqidagi innovatsion kontseptsiyasini butunlay yangi darajaga olib
            chiqadi. 1400 dan 2100 gacha bo'lgan reyting oralig'idagi
            o'yinchilar va shaxmat bo'yicha tayyor o'quv dasturini qidirayotgan
            o'qituvchilar uchun mo'ljallangan muallif o'quvchini nomutanosiblik
            asoslari orqali olib boradigan, barcha nomutanosibliklarning har bir
            tafsiloti o'zlashtirilishini ta'minlaydigan aqlni kengaytiruvchi
            sayohatni baham ko'radi. va shaxmat o'yinchisini/sevuvchisini har
            doim xohlagan, lekin erisha olishiga ishonmagan narsasi bilan
            qoldiradi: usta darajasidagi pozitsion poydevor.
          </p>
        </div>
      </div>
    </>
  );
}
