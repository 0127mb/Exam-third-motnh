import React from "react";
import uzchess from "../../../assets/uzchess.png";
import notification from "../../../assets/notification.png";
import Johongir from "../../../assets/Johongir.png";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header({ label }) {
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

      <nav>
        <span
          onClick={() => use("/main")}
          className={location.pathname === "/main" ? "active " : "disactive"}
        >
          Asosiy
        </span>
        <span
          onClick={() => use("/news")}
          className={location.pathname === "/news" ? "active" : "disactive"}
        >
          Yangiliklar
        </span>
        <span
          onClick={() => use("/course")}
          className={location.pathname === "/course" ? "active" : "disactive"}
        >
          Kurslar
        </span>
        <span
          onClick={() => use("/Libary")}
          className={location.pathname === "/Libary" ? "active" : "disactive"}
        >
          Kutubxona
        </span>
        <span  onClick={() => use("/connect")}
          className={location.pathname === "/connect" ? "active" : "disactive"}>Bog‘lanish</span>
      </nav>

      <div className="profile">
        <div className="nav9">
          <span onClick={()=>use('/header')}>🔎</span>
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
