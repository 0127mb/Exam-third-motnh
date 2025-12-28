import React from "react";
import roles from "../../assets/roles.png";
import Section from "./Components/Section";
import Header from "../main/components/Header";
import Footer from "../main/components/Footer";
import style from "./Components/Style.module.css";
import banner from "../../assets/Banners.png";
export default function ROles() {
  return (
    <>
      <Header></Header>
      <Section></Section>
      <div className={style.divx}>
        <img src={roles} alt="" className={style.img} />
      </div>
      <img src={banner} alt="" className={style.banner} />
      <Footer></Footer>
    </>
  );
}
