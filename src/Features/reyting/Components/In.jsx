import React from 'react'
import reyting from "../../../assets/rating.png";
import king from "../../../assets/kingofrating.png";
import king1 from "../../../assets/kingofrating1.png";
import king2 from "../../../assets/kingofrating2.png";
import king3 from "../../../assets/kingofrating3.png";
import king4 from "../../../assets/kingofrating4.png";
import king5 from "../../../assets/kingofrating5.png";
import king6 from "../../../assets/kingofrating6.png";
import king7 from "../../../assets/kingofrating7.png";
import king8 from "../../../assets/kingofrating8.png";
import king9 from "../../../assets/kingofrating9.png";
import next from "../../../assets/next.png";
import styled from "./New.module.css";
export default function In() {
  return (
   <div className={styled.realrating}>
        <img src={reyting} alt="" />
        <div className={styled.img}>
          <img src={king} alt="" />
          <img src={king1} alt="" />
          <img src={king2} alt="" />
          <img src={king3} alt="" />
          <img src={king4} alt="" />
          <img src={king5} alt="" />
          <img src={king6} alt="" />
          <img src={king7} alt="" />
          <img src={king8} alt="" />
          <img src={king9} alt="" />
        </div>
        <div className={styled.box}>
       
            <p>Показать</p>
            <select name="" id={styled.new} >
              <option value="">10</option>
            </select>
            <button className={styled.next}>
              <img src={next} alt="" />
            </button>
            <button className={styled.blue}>1</button>
            <button disabled className={styled.disabled}>2</button>
            <button disabled className={styled.disabled}>...</button>
            <button disabled className={styled.disabled}> 34</button>
            <button disabled className={styled.disabled}>35</button>
            <button className={styled.next}>
              <img src={next} alt="" />
            </button>
          </div>
   
      </div>
  )
}
