import React, { useEffect, useState } from "react";
import styled from "./Style.module.css";
import money from "../../../assets/money.png";
import data from "./Data1";
import stop from "../../../assets/start.png";
import colors from "../../../assets/colors.png";
import like from "../../../assets/like.png";
import share from "../../../assets/share.png";
import up from "../../../assets/goup.png";
import king from "../../../assets/kingofchess.png";
import award from "../../../assets/award.jpg";
import go from "../../../assets/go.png";
import down from "../../../assets/godown.png";
import coments from "../../../assets/coments.png";
import adver from "../../../assets/Adver.png";
import Footer from "../../main/components/Footer";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Header from "../../main/components/Header";
import Buy from "./Buy";
export default function Fordetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const [opened, setopened] = useState(false);
  const [block, setblock] = useState(false);
  const [opened1, setopened1] = useState(false);
  const [block1, setblock1] = useState(false);
  const [opened2, setopened2] = useState(false);
  const [block2, setblock2] = useState(false);
  function setrue() {
    if (opened) {
      setopened(false);
    } else {
      setopened(true);
    }
    if (block) {
      setblock(false);
    } else {
      setblock(true);
    }
  }

  function doittrue() {
    if (opened1) {
      setopened1(false);
    } else {
      setopened1(true);
    }
    if (block1) {
      setblock1(false);
    } else {
      setblock1(true);
    }
  }
  function doittrue2() {
    if (opened2) {
      setopened2(false);
    } else {
      setopened2(true);
    }
    if (block2) {
      setblock2(false);
    } else {
      setblock2(true);
    }
  }
  function state() {
    if (opened) {
      setopened(true);
    } else {
      setopened(false);
    }
    if (block) {
      setblock(false);
    } else {
      setblock(true);
    }
    if (opened1) {
      setopened1(true);
    } else {
      setopened1(false);
    }
    if (block1) {
      setblock1(false);
    } else {
      setblock1(true);
    }
    if (opened2) {
      setopened2(true);
    } else {
      setopened2(false);
    }
    if (block2) {
      setblock2(false);
    } else {
      setblock2(true);
    }
  }

  function getittrue() {
    setbuy(true);
    navigate("/buy");
  }
  const [buy, setbuy] = useState(() => {
    return localStorage.getItem("buy") === "true";
  });

  useEffect(() => {
    localStorage.setItem("buy", buy);
  }, [buy]);
  return (
    <>
      <Header></Header>
      <section>
        <div className={styled.firstdiv}>
          <div className={styled.vloue}>
            {" "}
            <h2 className={styled.h2000}>Shaxmat donalari bilan tanishuv</h2>
            <div className={styled.price}>
              <img src={money} alt="" />
              <h3 className={styled.now}>55 000.00 uzs</h3>
              <p className={styled.oldone}>160 000.00</p>
            </div>
          </div>
          <div className={styled.hrefs}>
            <a href="" className={styled.href}>
              <img src={data[0].icon} alt="" />
              <h3>{data[0].valueoficons}</h3>
            </a>
            <a href="" className={styled.href}>
              <img src={data[0].icon2} alt="" />
              <h3>{data[0].valueoficons1}</h3>
            </a>
            <a href="" className={styled.href}>
              {" "}
              <img src={stop} alt="" />
              <h3> 24 ta dars</h3>
            </a>
          </div>
        </div>
        <div className={styled.second}>
          <div className={styled.secondfirst}>
            <div className={styled.stars}>
              <img src={colors} alt="" />
              <img src={colors} alt="" />
              <img src={colors} alt="" />
              <img src={colors} alt="" />
            </div>
            <div className={styled.feedback}>
              <h3>4.0</h3>
              <p>(234 ta izoh)</p>
            </div>
          </div>
          <div className={styled.buy}>
            <div
              className={buy ? styled.green : styled.btn4}
              onClick={!buy ? getittrue : undefined}
            >
              {buy ? " ✅ Sotib olingan" : "Kursni sotib olish"}{" "}
            </div>
            <img src={like} alt="" className={styled.liked} />
            <img src={share} alt="" className={styled.liked} />
          </div>
        </div>
      </section>
      <div className={styled.styledbox4}>
        <div className={styled.videos}>
          <ol className={styled.line}>
            <li>
              <div className={styled.li}>
                {" "}
                <p> Asosiy donalar</p>
                <button className={styled.btn7}>
                  {" "}
                  <img src={block ? go : down} alt="" onClick={setrue} />
                </button>
              </div>
              <div className={opened ? styled.list : styled.block}>
                <ol className={styled.littlebox}>
                  <li className={styled.images}>
                    {" "}
                    <NavLink to={"/video"}>
                      {" "}
                      <img src={up} alt="" />
                    </NavLink>
                    <p>kirish</p>
                  </li>
                  <li>
                    <img src={king} alt="" />
                    <p>Mot qilish</p>
                  </li>
                  <li>
                    <img src={award} alt="" />
                    <p> Piyoda bilan tanishuv</p>
                  </li>
                </ol>
              </div>
            </li>
          </ol>
        </div>
        <div className={styled.videos}>
          <ol className={styled.line}>
            <li>
              <div className={styled.li}>
                {" "}
                <p> Asosiy donalar</p>
                <button className={styled.btn7}>
                  {" "}
                  <img src={block1 ? go : down} alt="" onClick={doittrue} />
                </button>
              </div>
              <div className={opened1 ? styled.list2 : styled.block2}></div>
            </li>
          </ol>
        </div>
        <div className={styled.videos}>
          <ol className={styled.line}>
            <li>
              <div className={styled.li}>
                {" "}
                <p> Asosiy donalar</p>
                <button className={styled.btn7}>
                  {" "}
                  <img src={block2 ? go : down} alt="" onClick={doittrue2} />
                </button>
              </div>
              <div className={opened2 ? styled.list2 : styled.block2}></div>
            </li>
          </ol>
        </div>
      </div>
      <div className={state ? styled.morewitdh : styled.coment}>
        <h1>Kurs haqida izohlar</h1>
        <img src={coments} alt="" />
      </div>{" "}
      <br /> <br />
      <button className={styled.more}>Barcha izohlar</button>
      <Footer></Footer>
    </>
  );
}
