import React from "react";
import house from "../../../assets/house.png";
import stack from '../../../assets/Stack.png'

export default function Section() {
  return (
    <>
      <div className="header2">
        <img src={house} alt="" />
      <a href="/main">Asosiy</a>
      <img src={stack} alt="" />
      <a href="/cart">Savatcha</a>
      <img src={stack} alt="" />
      <h4>
        Rasmiylashtirish
      </h4>
      </div>
    </>
  );
}
