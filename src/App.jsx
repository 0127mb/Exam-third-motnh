import React from "react";
import styled from "./App.module.css";
import style from "./index.module.css";
import uzchess from "./assets/uzchess.png";
import Registir from "./components/Registir";
export default function App() {
  return <>
  <img src={uzchess} alt="" className={styled.img}/>
  <Registir></Registir>
  </>;
}
