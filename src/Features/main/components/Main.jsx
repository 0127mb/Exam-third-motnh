import React from "react";
import data from "./Data";
import libary from "../assets/libary.png";
import course from "../assets/kurslar.png";
import style from "../App.module.css";
import styled from "../index.module.css";
import live from "../../../assets/live.png";
import full from "../../../assets/full.png";
import full1 from "../../../assets/full1.png";
import full2 from "../../../assets/full2.png";
import full3 from "../../../assets/full3.png";
import money from "../assets/funding.png";
import adver from "../../../assets/Adver.png";
import coursed from "../assets/course.png";
import coursed1 from "../assets/course1.png";
import coursed2 from "../assets/course2.png";
import coursed3 from "../assets/course3.png";
import horse from "../assets/hourse.png";
import horse1 from "../assets/hourse1.png";
import horse2 from "../assets/hourse2.png";
import horse3 from "../assets/hourse3.png";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const use = useNavigate()
  return (
    <>
      <div className={styled.box2}>
        <img src={libary} alt="" />
        <img src={course} alt="" className={styled.course} />
      </div>
      <div className={styled.main009}>
        <div className={styled.finished}>
          <div>
            <div className={style.p0}>
              {" "}
              <h3>Yakunlangan o‘yinlar</h3>
              <p onClick={()=> use('/reyting')}>Barchasi</p>
            </div>
            <div className={styled.p}>
              <div className={styled.p1}>
                <p>O‘yinchilar</p>
              </div>
              <div className={styled.p3}>
                <p>natija</p>
                <p>o‘yin Turi</p>
                <p>Yurishlar</p>
              </div>
              <div className={styled.p4}>
                <p>SANA</p>
              </div>
            </div>
          </div>
        </div>
        <ol className={styled.ol}>
          <li>
            <div>
              <h3>
                {" "}
                <img src={data[6].award} alt="" />
                {data[6].memember}
              </h3>
              <h3>
                <img src={data[6].fail} alt="" />
                {data[6].failmemember}
              </h3>
            </div>
            <div className={styled.data1}>
              <p>{data[6].overall}</p>

              <p>{data[6].owerall2}</p>
            </div>
            <div className={styled.data01}>
              <p>{data[6].score}</p>
              <p>{data[6].failscore}</p>
            </div>
            <h2 className={styled.datah2}>
              <img src={data[6].typeofgame} alt="" />
              {data[6].textname}
            </h2>
            <p className={styled.datap1}>{data[6].gone}</p>
            <p className={styled.datap2}>{data[6].date}</p>
          </li>
        </ol>
        <ol className={styled.ol}>
          <li>
            <div>
              <h3>
                {" "}
                <img src={data[7].award} alt="" />
                {data[7].memember}
              </h3>
              <h3>
                <img src={data[7].fail} alt="" />
                {data[7].failmemember}
              </h3>
            </div>
            <div className={styled.data2}>
              <p>{data[7].overall}</p>

              <p>{data[7].owerall2}</p>
            </div>
            <div className={styled.data3}>
              <p>{data[7].score}</p>
              <p>{data[7].failscore}</p>
            </div>
            <h2 className={styled.data3h2}>
              <img src={data[7].typeofgame} alt="" />
              <h2 style={{ color: "rgba(130, 204, 39, 1)" }}>
                {data[7].textname}{" "}
              </h2>
            </h2>
            <p className={styled.data3p}>{data[7].gone}</p>
            <p className={styled.data3p2}>{data[7].date}</p>
          </li>
        </ol>
        <ol className={styled.ol}>
          <li>
            <div>
              <h3>
                {" "}
                <img src={data[8].award} alt="" />
                {data[8].memember}
              </h3>
              <h3>
                <img src={data[8].fail} alt="" />
                {data[8].failmemember}
              </h3>
            </div>
            <div className={styled.data4}>
              <p>{data[8].overall}</p>

              <p>{data[8].owerall2}</p>
            </div>
            <div className={styled.data5}>
              <p>{data[8].score}</p>
              <p>{data[8].failscore}</p>
            </div>
            <h2
              className={styled.data8}
              style={{ color: "rgba(224, 181, 49, 1)" }}
            >
              <img src={data[8].typeofgame} alt="" />
              {data[8].textname}
            </h2>
            <p className={styled.data6}>{data[8].gone}</p>
            <p className={styled.data7}>{data[8].date}</p>
          </li>
        </ol>
        <ol className={styled.ol}>
          <li>
            <div>
              <h3>
                {" "}
                <img src={data[9].award} alt="" />
                {data[9].memember}
              </h3>
              <h3>
                <img src={data[9].fail} alt="" />
                {data[9].failmemember}
              </h3>
            </div>
            <div className={styled.data9}>
              <p>{data[9].overall}</p>

              <p>{data[9].owerall2}</p>
            </div>
            <div className={styled.data10}>
              <p>{data[9].score}</p>
              <p>{data[9].failscore}</p>
            </div>
            <h2
              className={styled.data11}
              style={{ color: "rgba(224, 181, 49, 1)" }}
            >
              <img src={data[9].typeofgame} alt="" />
              {data[9].textname}
            </h2>
            <p className={styled.data12}>{data[9].gone}</p>
            <p className={styled.data13}>{data[9].date}</p>
          </li>
        </ol>
        <ol className={styled.ol}>
          <li>
            <div>
              <h3>
                {" "}
                <img src={data[10].award} alt="" />
                {data[10].memember}
              </h3>
              <h3>
                <img src={data[10].fail} alt="" />
                {data[10].failmemember}
              </h3>
            </div>
            <div className={styled.data14}>
              <p>{data[10].overall}</p>

              <p>{data[10].owerall2}</p>
            </div>
            <div className={styled.data15}>
              <p>{data[10].score}</p>
              <p>{data[10].failscore}</p>
            </div>
            <h2
              className={styled.data16}
              style={{ color: "rgba(130, 204, 39, 1)" }}
            >
              <img src={data[10].typeofgame} alt="" />
              {data[10].textname}
            </h2>
            <p className={styled.data17}>{data[10].gone}</p>
            <p className={styled.data18}>{data[10].date}</p>
          </li>
        </ol>
      </div>
      <div className={styled.pc}>
        <img src={live} alt="" className={styled.live} />
        <div className={styled.baground}>
          <button onClick={()=> use('/live')}>Ko‘rish</button>
        </div>
      </div>
      <div className={styled.news}>
        <div className={styled.name2}>
          {" "}
          <h1>Yangiliklar</h1>
          <a href="">barchasi</a>
        </div>
        <div className={styled.img}>
          <img src={full} alt="" />
          <img src={full1} alt="" />
          <img src={full2} alt="" />
          <img src={full3} alt="" />
        </div>
        <button className={styled.more}>Koproq</button>
      </div>
      <div className={styled.adver}>
        <img src={money} alt="" />
        <img src={adver} alt="" />

        <div className="course4">
          <div className={styled.name}>
            <h3>Top kurslar</h3>
            <a href="">Barchasi</a>
          </div>
          <li className={styled.list}>
            <div className="together">
              <img src={coursed} alt="" />
              <h4 className={styled.h5}>Shaxmat donalari bilan tanishuv</h4>
            </div>
            <div className="dived">
              <div className={styled.together2}>
                <p>⭐️3.5</p> <br />
                <p className={styled.grey}>👁5 756 </p>
              </div>
            </div>
          </li>
          <li className={styled.list}>
            <div className="together">
              <img src={coursed1} alt="" />
              <h4 className={styled.h5}>Shoxga hujum qilish</h4>
            </div>
            <div className="dived">
              <div className={styled.together2}>
                <p>⭐️3.5</p> <br />
                <p className={styled.grey}>👁5 756 </p>
              </div>
            </div>
          </li>
          <li className={styled.list}>
            <div className="together">
              <img src={coursed2} alt="" />
              <h4 className={styled.h5}>Mot qilish</h4>
            </div>
            <div className="dived">
              <div className={styled.together2}>
                <p>⭐️3.5</p> <br />
                <p className={styled.grey}>👁5 756 </p>
              </div>
            </div>
          </li>
          <li className={styled.list}>
            <div className="together">
              <img src={coursed3} alt="" />
              <h4 className={styled.h5}>Asosiy taktikalar</h4>
            </div>
            <div className="dived">
              <div className={styled.together2}>
                <p>⭐️3.5</p> <br />
                <p className={styled.grey}>👁5 756 </p>
              </div>
            </div>
          </li>
        </div>
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
    
    </>
  );
}
