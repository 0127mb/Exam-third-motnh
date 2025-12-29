import React from "react";
import Header from "../../main/components/Header";
import Section from './Section'
import css from "../App.module.css";
import check from '../../../assets/check.png'
import Footer from "../../main/components/Footer";
export default function FIll() {
  return (
    <>
      <Header></Header>
<Section></Section>
      <div className={css.div90}>
        <h3>Ma’lumotlaringizni kiriting</h3>
        <div className="div">
          <div className={css.fisrtinp}>
            <p className={css.grey}>To‘liq ismingiz</p>
            <input
              type="text"
              placeholder="To‘liq ismingizni kiriting"
              className={css.input10}
            />
          </div>

          <div className={css.flex}>
            <div className={css.number}>
              <p className={css.grey}>Telefon raqamingiz</p>
              <div className={css.inp2}>
                <p className={css.under}>+998</p>
                <input
                  type="number"
                  className={css.numbered}
                  placeholder="__ ___ __ __"
                />
              </div>
            </div>
            <div className={css.email}>
              <p className={css.grey}>Elektron pochta</p>
              <input
                type="email"
                placeholder="Misol: j.pulatov@uic.group"
                className={css.fill}
              />
            </div>
          </div>
          <div className={css.flex1}>
            <button className={css.canceled}>Bekor qilish</button>
            <button className={css.continue}>Buyurtma berish</button>
          </div>
        </div>
      </div>


      <img src={check} alt=""  className={css.check}/>


      <Footer></Footer>
    </>
  );
}
