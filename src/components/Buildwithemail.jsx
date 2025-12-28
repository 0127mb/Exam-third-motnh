import React from "react";
import styled from "../App.module.css";
import stack from "../assets/border.png";
import half from "../assets/half.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import uzchess from "../assets/uzchess.png";
export default function Buildwithemail() {
  const navigate = useNavigate();
  const location = useLocation();
  function navigated() {

    if (location.pathname === "/buildwithemail") {
      navigate("/build");
    }
  }
  function navigated1() {
    if (location.pathname === "/") {
      navigate("/check");
    }
    else if (location.pathname === '/'){
      navigate('/enter')
    }
  }
  return (
    <>
     <img src={uzchess} alt="" className={styled.img} />
      <div className={styled.allinone}>
        <div className={styled.monster}>
          <div className={styled.borders}>
            <h1 className={styled.title}>Parolni tiklash</h1>
            <div className={styled.firstbutton}>
              <button className={styled.disactive} onClick={()=> navigate('/build')}>Telefon raqam orqali</button>
              <button className={styled.active} onClick={navigated}>
                E-mail orqali
              </button>
            </div>
          </div>
          <div className={styled.secondinp}>
                  <p className={styled.name}>Elektron pochta</p>
      
                  <input
                    type="text"
                    placeholder="example@gmail.com"
                    className={styled.input}
                  />
                </div>
      

          <div className="registerbuttons">
         
           
               <button className={styled.activeregister1} onClick={() =>   navigate('/passemail')}>Davom etish</button>
          </div>
        </div>
        <img src={half} alt="" />
      </div>
    </>
  );
}
