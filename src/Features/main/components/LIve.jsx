
import Header from "./Header";
import Section from "./Section";

import horse from "../assets/hourse.png";
import horse1 from "../assets/hourse1.png";
import horse2 from "../assets/hourse2.png";
import horse3 from "../assets/hourse3.png";
import styled from "../index.module.css";
import adver from '../../../assets/Adver.png'
import Footer from "./Footer";
export default function LIve() {
  return (
    <>
      <Header></Header>
      <Section></Section>
      <div id="div99">
        <h3 id="h8"> Jahon chempionati 4-tur o‘yini</h3>
        <iframe
        id="iframe"
          width="1369"
          height="770"
          src="https://www.youtube.com/embed/fViG-y3gBKo"
          title="MAGNUSNI otlarsiz yutdim😱 | Islom Sindarov Magnus Carlsen&#39;ga qarshi"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
         <div className={`${styled.books}  ${styled.books2}`}>
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
      </div> <br />
      <img src={adver} alt="" className={`${styled.books2} ${styled.books3}`}/>
      <Footer></Footer>
    </>
  );
}
