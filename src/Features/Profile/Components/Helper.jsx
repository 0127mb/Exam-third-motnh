import React from 'react'
import mixer from "../../../assets/mixer.png";

import bill from '../../../assets/bill.png'
import css from "./Profile.module.css";
export default function Helper() {
  return (
  <>
  
  
  
   <div className={css.cards}>
          <div className={css.box}>
            <img src={mixer} alt="" className={css.mixer} />
           <div className="div">
             <h3>№ 24542312123</h3>
            <p style={{ color: "green" }}>✅Yetkazib berildi</p>
           </div>
          </div> <br />
          <div className={css.black} style={{background: 'black'}}>
          <img src={bill} alt="" />
            
          </div>
        </div>
            <div className={css.cards}>
          <div className={css.box}>
            <img src={mixer} alt="" className={css.mixer} />
           <div className="div">
             <h3>№ 24542312123</h3>
            <p style={{ color: "green" }}>✅Yetkazib berildi</p>
           </div>
          </div> <br />
          <div className={css.black} style={{background: 'black'}}>
          <img src={bill} alt="" />
            
          </div>
        </div>
            <div className={css.cards}>
          <div className={css.box}>
            <img src={mixer} alt="" className={css.mixer} />
           <div className="div">
             <h3>№ 24542312123</h3>
            <p style={{ color: "green" }}>✅Yetkazib berildi</p>
           </div>
          </div> <br />
          <div className={css.black} style={{background: 'black'}}>
          <img src={bill} alt="" />
            
          </div>
        </div>
            <div className={css.cards}>
          <div className={css.box}>
            <img src={mixer} alt="" className={css.mixer} />
           <div className="div">
             <h3>№ 24542312123</h3>
            <p style={{ color: "green" }}>✅Yetkazib berildi</p>
           </div>
          </div> <br />
          <div className={css.black} style={{background: 'black'}}>
          <img src={bill} alt="" />
            
          </div>
        </div></>
  )
}
