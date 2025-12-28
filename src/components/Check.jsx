import React, { useEffect, useRef, useState } from "react";
import styles from "./Check.module.css";
import next from "../assets/next.png";
import edit from "../assets/edit.png";
import half from "../assets/half.png";
import styled from "../App.module.css";
import uzchess from "../assets/uzchess.png";
import resend from "../assets/resend.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
function Otpinput() {
  const inputs = 6;
  const [value, setValue] = useState(Array(inputs).fill(""));
  const inputsref = useRef([]);
  const handelchange = (e, idx) => {
    const val = e.target.value;
    const newvalue = [...value];

    if (/^\d$/.test(val)) {
      newvalue[idx] = val;
      setValue(newvalue);

      if (idx < inputs - 1) {
        inputsref.current[idx + 1].focus();
      }
    } else if (val === "") {
      newvalue[idx] = "";
      setValue(newvalue);
    }
  };

  const hadelkeydown = (e, idx) => {
    if (e.key === "Backspace" && !value[idx] && idx > 0) {
      inputsref.current[idx - 1].focus();
    }
  };
  return (
    <>
      <div className={styles.inps}>
        {value.map((val, idx) => (
          <input
            type="text"
            key={idx}
            maxLength={1}
            className={styles.inputs1}
            value={val}
            ref={(el) => (inputsref.current[idx] = el)}
            onChange={(e) => handelchange(e, idx)}
            onKeyDown={(e) => hadelkeydown(e, idx)}
          />
        ))}
      </div>
    </>
  );
}
export default function Check() {
  const navigate = useNavigate();
  const location = useLocation();
  function cantrol() {
    if (location.pathname === "/check") {
      navigate(-1);
    }
    // else if (location.pathname === '/check'){
    //     navigate('/create')
    // }
  }
  const [seconds, setseconds] = useState(60);
  useEffect(() => {
    if (seconds === 0) return;
    const timer = setTimeout(() => {
      setseconds((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  return (
    <>
      <img src={uzchess} alt="" className={styled.img} />
      <div className={styled.allinone}>
        <div className={styles.first}>
          <div className={styles.border}>
            <div className={styles.double}>
              <button onClick={cantrol} className={styles.back}>
                <img src={next} alt="next" />
              </button>

              <h1 className={styles.h1}>Telefon raqamni tasdiqlash</h1>
            </div>
          </div>
          <h1 className={styles.h2}>
            Tasdiqlash uchun maxsus kod quyidagi raqamga yuborildi{" "}
          </h1>
          <div className={styles.grey}>
            +998 88 033 18 05
            <button onClick={cantrol}>
              <img src={edit} alt="edit" />
            </button>
          </div>
          <p className={styles.color}>Maxsus kodni kiriting</p>
          <Otpinput />
          <p className={styles.color}>
            qayta yuborish:{" "}
            {seconds > 0 ? (
              <span className={seconds <= 30 ? styled.yellow : styles.green}>
                00 : {seconds < 10 ? `0${seconds}` : seconds}
              </span>
            ) : (
              <img
                src={resend}
                alt="resend"
                onClick={() => setseconds(60)}
                style={{ cursor: "pointer" }}
              />
            )}
          </p>{" "}
          <button className={styles.activated} onClick={()=> navigate("/create")}>
            Tasdiqlash
          </button>
        </div>

        <img src={half} alt="" />
      </div>
    </>
  );
}
