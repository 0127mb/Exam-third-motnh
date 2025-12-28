import React, { useState } from "react";
import style from "./Components/News.module.css";
import Header from "../main/components/Header";
import Section from "./Components/Section";
import data from "./Components/Data";

import adver from "../../assets/Adver.png";
import money from "../main/assets/funding.png";
import horse from "../main/assets/hourse.png";
import horse1 from "../main/assets/hourse1.png";
import horse2 from "../main/assets/hourse2.png";
import horse3 from "../main/assets/hourse3.png";
import styled from "../main/index.module.css";
import Footer from "../main/components/Footer";
import search from "../../assets/search.png";
import nothingfound from "../../assets/nothingfound.png";
import { Navigate, useNavigate } from "react-router-dom";
export default function Modern() {
  const [searchquery, setsearchquery] = useState("");
  const filtereddata = data.filter(
    (item) =>
      item.date
        .trim()
        .toLowerCase()
        .includes(searchquery.trim().toLowerCase()) ||
      item.information
        .trim()
        .toLowerCase()
        .includes(searchquery.trim().toLowerCase())
  );
  const navigate = useNavigate()
  return (
    <>
      <Header></Header>

      <Section></Section>

      <div id={style.named}>
        <h3>Yangiliklar</h3>
        <div className={`${style.input00} `}>
          <img src={search} alt="" />
          <input
            type="search"
            className={`${style.inputy}  ${style.inputy}  `}
            placeholder="Qidir"
            value={searchquery}
            onChange={(e) => setsearchquery(e.target.value)}
          />
        </div>
      </div>

      <div id={style.new}>
        {filtereddata.length === 0 ? (
          <img src={nothingfound}></img>
        ) : (
          filtereddata.map((item, index) => {
            return (
              <>
                <div id="news" style={item.style} key={index}>
                  <img src={item.img} alt="" style={item.witdh} />
                  <p style={item.color}>{item.date}</p>
                  <h3>{item.information}</h3>
                  <p style={item.color}>{item.detail}</p>
                </div>
              </>
            );
          })
        )}
        <button className={style.more} onClick={()=> navigate('/morenews')}>koproq</button>
      </div>
      <div className={styled.adver}>
        <img src={money} alt="" />
        <img src={adver} alt="" />

        <div className={styled.books}>
          <div className={styled.name}>
            <h4>Top kitoblar</h4>
            <a href="">Barchasi</a>
          </div>
          <li className={styled.list}>
            <div className="together">
              <img src={horse} alt="" />
              <h4 className={styled.h5}>
                {" "}
                Shaxmatdagi qobiliyatliringizga qayta baxo bering
              </h4>
            </div>
          </li>
          <li className={styled.list}>
            <div className="together">
              <img src={horse1} alt="" />
              <h4 className={styled.h5}>
                {" "}
                Shaxmatdagi qobiliyatliringizga qayta baxo bering
              </h4>
            </div>
          </li>{" "}
          <li className={styled.list}>
            <div className="together">
              <img src={horse2} alt="" />
              <h4 className={styled.h5}>
                {" "}
                Shaxmatdagi qobiliyatliringizga qayta baxo bering
              </h4>
            </div>
          </li>{" "}
          <li className={styled.list}>
            <div className="together">
              <img src={horse3} alt="" />
              <h4 className={styled.h5}>
                {" "}
                Shaxmatdagi qobiliyatliringizga qayta baxo bering
              </h4>
            </div>
          </li>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
