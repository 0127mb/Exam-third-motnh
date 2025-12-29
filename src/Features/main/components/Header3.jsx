import React from "react";
import uzchess from "../../../assets/uzchess.png";
import notification from "../../../assets/notification.png";
import Johongir from "../../../assets/Johongir.png";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header3({ label }) {
  const use = useNavigate();
  const Location = useLocation();

  return (
    <header>
      <div className="box">
        <img src={uzchess} alt="" className="uzchess" />
        <img src={label} alt="" />
        <select>
          <option value="">uzbekcha</option>
        </select>
      </div>

 <div id="inputs">
       <input type="text"  id="text"/>
       <button id="clear">Tozlash</button>
 </div>
        

      <div className="profile">
        <div className="nav9">
          <span onClick={()=>use(-1)}>❌</span>
          <span onClick={()=>use('/cart')}>🧺 </span>
          <span>🔔</span>
        </div>

        <div className="Jonny">
          <span onClick={() => use("/profile")}> Jasurbek Pulatov</span>
          <img src={Johongir} alt="" />
        </div>
      </div>
    </header>
  );
}
