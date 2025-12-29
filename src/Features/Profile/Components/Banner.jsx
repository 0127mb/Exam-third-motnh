import React, { useState } from "react";
import profile from "../../../assets/profile.png";
import css from "./Profile.module.css";
import true1 from "../../../assets/true.png";
import true2 from "../../../assets/true2.png";
import true3 from "../../../assets/true3.png";
import true4 from "../../../assets/true4.png";
import false1 from "../../../assets/false.png";
import false2 from "../../../assets/false2.png";
import false3 from "../../../assets/false3.png";
import false4 from "../../../assets/false4.png";
import book from "../../../assets/Book.png";
import book1 from "../../../assets/Book1.png";
import book2 from "../../../assets/Book2.png";
import book3 from "../../../assets/Book3.png";
import Helper from "./Helper";
import Helper2 from "./Helper2";
import img0 from "../../../assets/2.png";
import img01 from "../../../assets/3.png";
import named from "../../../assets/named.png";
import leave from "../../../assets/leave.png";
import edit from "../../../assets/edit.png";
import img10 from "../../../assets/10.png";
import img12 from "../../../assets/12.png";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const use = useNavigate();
  const [img1, setimg1] = useState(false);
  const [img2, setimg2] = useState(false);
  const [img3, setimg3] = useState(false);
  const [img4, setimg4] = useState(false);
  const [click, setclick] = useState(false);
  const [img7, setimg7] = useState(false);
  function img() {
    setimg1((prev) => !prev);
    if (img2) {
      setimg2(false);
    } else if (img3) {
      setimg3(false);
    } else if (img4) {
      setimg4(false);
    }
  }
  function imgs2() {
    setimg2((prev) => !prev);
    if (img1) {
      setimg1(false);
    } else if (img3) {
      setimg3(false);
    } else if (img4) {
      setimg4(false);
    }
  }
  function imgs3() {
    setimg3((prev) => !prev);
    setimg7((prev) => !prev);
    if (img1) {
      setimg1(false);
    } else if (img2) {
      setimg2(false);
    } else if (img4) {
      setimg4(false);
    }
  }
  function imgs4() {
    setimg4((prev) => !prev);
    if (img1) {
      setimg1(false);
    } else if (img3) {
      setimg3(false);
    } else if (img2) {
      setimg2(false);
    }
  }
  function newimg() {
    setclick((prev) => !prev);
    setimg7(false);
  }

  return (
    <>
      <img src={profile} alt="" className={css.firstimg} />

      <div className={css.imgs}>
        <img src={img1 ? true1 : false1} alt="" onClick={img} />
        <img src={img2 ? true2 : false2} alt="" onClick={imgs2} />
        <img src={img3 ? true3 : false3} alt="" onClick={imgs3} />
        <img src={img4 ? true4 : false4} alt="" onClick={imgs4} />
      </div>

      <div className={img1 ? css.all : css.none} onClick={img}>
        <Helper2></Helper2>
      </div>

      <div className={img2 ? css.allthings : css.none} onClick={imgs2}>
        <Helper></Helper>
      </div>
      <div>
        <div className={img3 ? css.butons : css.none}>
          <button className={css.disable}>Saqlangan kurslar</button>
          <button
            className={click ? css.savedbtn : css.disable}
            onClick={newimg}
          >
            saqlangan kitoblar
          </button>
        </div>
        <div className={click ? css.imgs12 : css.none}>
          <img src={img0} alt="" />
          <img src={img01} alt="" />
        </div>

        <div className={img7 ? css.saved : css.none} onClick={imgs3}>
          <div className="imgs">
            <img src={book} alt="" />
          </div>
          <div className="imgs">
            <img src={book1} alt="" />
          </div>
          <div className="imgs">
            <img src={book2} alt="" />
          </div>

          <div className="imgs">
            <img src={book3} alt="" />
          </div>
        </div>
      </div>
      <div className={img4 ? css.changes : css.none}>
        <div className={css.bigcard}>
          <div className="vox">
            <div className={css.ic}>
              <h2>Foydalanovchi ma’lumotlari</h2>{" "}
              <button className={css.edit} onClick={()=>use('/edit')}>
                <img src={edit} alt="" />
              </button>
            </div>
            <img src={named} alt="" />
          </div>
          <button className={css.left} onClick={() => use("/leave")}>
            {" "}
            <img src={leave} alt="" /> Chiqish
          </button>
        </div>

        <div className={css.securitiy}>
          <h1>Xavfsizlik</h1>
          <div className={css.images}>
            <img src={img10} alt=""onClick={()=>use('/change')} />
            <img src={img12} alt="" onClick={()=>use('/update')} />
          </div>
        </div>
      </div>
    </>
  );
}
