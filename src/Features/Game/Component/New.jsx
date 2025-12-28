import React from 'react'
import list from "../../../assets/listofitems.png";
import list1 from "../../../assets/list1.png";
import list2 from "../../../assets/list1.png";
import list3 from "../../../assets/list2.png";
import list4 from "../../../assets/list3.png";
import list5 from "../../../assets/list4.png";
import list6 from "../../../assets/list5.png";
import list7 from "../../../assets/list6.png";
import list8 from "../../../assets/list7.png";
import list9 from "../../../assets/list8.png";
import list10 from "../../../assets/list9.png";
import styled from "./Game.module.css";
import next from '../../../assets/next.png'
export default function New() {
  return (
<>
  <div className={styled.realrating}>
        <img src={list} alt="" />
        <div className={styled.img}>
          <img src={list1} alt="" />
          <img src={list2} alt="" />
          <img src={list3} alt="" />
          <img src={list4} alt="" />
          <img src={list5} alt="" />
          <img src={list6} alt="" />
          <img src={list7} alt="" />
          <img src={list8} alt="" />
          <img src={list9} alt="" />
          <img src={list10} alt="" />
        </div>
         <div className={styled.box}>
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


</>
  )
}
