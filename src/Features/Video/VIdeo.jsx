import home from "../../assets/home 1.png";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "./index.module.css";
import slack from "../../assets/Stack.png";
import video from "../../assets/vidiyo.png";
import stop2 from "../../assets/stop.png";
import Footer from "../main/components/Footer";
import done from "../../assets/done.png";
import adver from "../../assets/Adver.png";
import award from "../../assets/adguard.png";
import { useEffect, useState } from "react";
import Header from "../main/components/Header";
import queen from "../../assets/queen.png";
export default function Video() {
  const [hiddin, sethiddin] = useState(false);
  const [flex, setflex] = useState(false);
  const navigate = useNavigate();


  return (
    <>
      <Header></Header>
      <div className={styled.section5}>
        <img src={home} alt="" />
        <NavLink to={"/main"}>Asosiy</NavLink>
        <img src={slack} alt="" />
        <NavLink to={"/detailofcoursepage"}>organish</NavLink>
        <img src={slack} alt="" />
        <p>Shaxmat donalari bilan tanishuv</p>
      </div>
      <main className={styled.main00}>
        <div className="div7">
          <h1>Shaxmat donalari bilan tanishuv</h1> <br />
          <button className={styled.start}>
            <img src={video} alt="" />
          </button>
          <img src={stop2} alt="" />
          <br /> <br />
          <p className={styled.grey}>
            Ushbu dars davomida siz har bir shaxmat donasi bilan tanishib
            ularning o‘ziga xos xususiyatlari haqida bilib olishingiz mumkin.
            Raqib shohiga hujum qilish usullari va yo‘l qo‘yiladigan xatoliklar
            haqida. O‘yinni mot bilan yakunlash. Chiroyli kombinatsiyalar bilan
            raqibingizni hayron qoldiring.Ushbu dars davomida siz har bir
            shaxmat donasi bilan tanishib ularning o‘ziga xos xususiyatlari
            haqida bilib olishingiz mumkin. Raqib shohiga hujum qilish usullari
            va yo‘l qo‘yiladigan xatoliklar haqida. O‘yinni mot bilan yakunlash.
            Chiroyli kombinatsiyalar bilan raqibingizni hayron qoldiring.Ushbu
            dars davomida siz har bir shaxmat donasi bilan tanishib ularning
            o‘ziga xos xususiyatlari haqida bilib olishingiz mumkin. Raqib
            shohiga hujum qilish usullari va yo‘l qo‘yiladigan xatoliklar
            haqida. O‘yinni mot bilan yakunlash. Chiroyli kombinatsiyalar bilan
            raqibingizni hayron qoldiring.
          </p>
        </div>
      </main>{" "}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br />
      <br />
      <div className={hiddin ? styled.major : styled.noned}>
        <img src={award} alt="" />
        <div className={styled.for}>
          {" "}
          <p>1.4 Fors major keyslar</p>
          <span>05:06</span>
        </div>
      </div>
      <div className={styled.buttons}>
        <button className={styled.next}>Oldingi</button>
        <button
          onClick={() => setflex(true)}
          className={styled.next}
          onMouseEnter={() => sethiddin(true)}
          onMouseLeave={() => sethiddin(false)}
          onDoubleClick={() => navigate("/award")}
        >
          Keyingni
        </button>
        <div className={flex ? styled.devmindset : styled.none}>
          <div>
            <h3>1.2 Mot qilish</h3>
            <p className={styled.p000}>
              Ushbu dars davomida siz har bir shaxmat donasi bilan tanishib
              ularning o‘ziga xos xususiyatlari haqida bilib olishingiz mumkin.
              Raqib shohiga hujum qilish usullari va yo‘l qo‘yiladigan
              xatoliklar haqida. O‘yinni mot bilan yakunlash.
            </p>
          </div>
          <div className="dic">
            <p>20 soniyada o'ynaydi</p>
            <img src={queen} alt="" />
          </div>
        </div>
      </div>
      <div className={styled.left}>
        <li className={styled.list4}>
          <img src={done} alt="" className={styled.hover} />
          <li className={styled.list7}>
            {" "}
            <span className={styled.span}>1-dars</span>
            <p className={styled.p7}>Piyoda</p>
          </li>
        </li>
        <li className={styled.list4}>
          <img src={done} alt="" className={styled.hover} />
          <li className={styled.list7}>
            {" "}
            <span className={styled.span}>2-dars</span>
            <p className={styled.p7}>ot</p>
          </li>
        </li>
        <li className={styled.list4}>
          <img src={done} alt="" className={styled.hover} />
          <li className={styled.list7}>
            {" "}
            <span className={styled.span}>3-dars</span>
            <p className={styled.p7}>fill</p>
          </li>
        </li>
        <li className={styled.list4}>
          <img src={done} alt="" className={styled.hover} />
          <li className={styled.list7}>
            {" "}
            <span className={styled.span}>4-dars</span>
            <p className={styled.p7}>forzin</p>
          </li>
        </li>
        <li className={styled.list4}>
          <img src={done} alt="" className={styled.hover} />
          <li className={styled.list7}>
            {" "}
            <span className={styled.span}>5-dars</span>
            <p className={styled.p7}>Shox</p>
          </li>
        </li>
        <li className={styled.list4}>
          <img src={done} alt="" className={styled.hover} />
          <li className={styled.list7}>
            {" "}
            <span className={styled.span}>6-dars</span>
            <p className={styled.p7}>Shox</p>
          </li>
        </li>
      </div>{" "}
      <br /> <br /> <br /> <br />
      <img src={adver} alt="" className={`${styled.advert} ${styled.drujba}`} />
      <Footer></Footer>
    </>
  );
}
