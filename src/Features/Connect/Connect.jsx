import React from "react";
import Header from "../main/components/Header";
import css from "./Components/Style.module.css";
import Section from "./Components/Section";
import ito from "../../assets/ito.png";
import Footer from "../main/components/Footer";
import advert from "../../assets/advert.png";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";


export default function Connect() {
    const use = useNavigate()
  return (
    <>
      <Header></Header>
      <Section></Section>
      <div className={css.connect}>
        <h3>Bog‘lanish</h3>
        <div className={css.flex}>
          <div className={css.firstinp}>
            <p className={css.grey}>Siz bilan bog‘lanish</p>
            <input
              type="text"
              placeholder="Ism familiyangizni kiriting"
              className={css.inp1}
            />
          </div>
          <div className={css.secondinp}>
            <p className={css.grey}>Telefon raqamingiz</p>
            <div className={css.number}>
              <p className={css.white}>+998</p>
              <input type="number" name="" id={css.number} />
            </div>
          </div>
        </div>
        <p className={css.report}>Shikoyat</p> <br />
        <input type="text" className={css.inp} />
        <div className={css.between}>
          <div className={css.agree}>
            <input type="checkbox" name="" id="" />
            <p className={css.p}>
              {" "}
              Foydalanish{" "}
              <a href="" className={css.href}>
                shartlari{" "}
              </a>
              va{" "}
              <a href="" className={css.href}>
                qoidalarini
              </a>{" "}
              qabul qilaman
            </p>
          </div>
          <button className={css.continue} onClick={()=>use('/succes')}>Yuborish</button>
        </div>
        <img src={ito} alt="" className={css.ito} />
      </div>
      <iframe
        className={css.iframe}
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11990.25631430392!2d69.2758336!3d41.2965909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1766988684057!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <img src={advert} alt="" className={css.advert} />
      <Footer></Footer>
    </>
  );
}
