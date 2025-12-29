import React from 'react'
import secces from '../../../assets/0.png'
import css from "./Style.module.css";
import { useNavigate } from 'react-router-dom';
export default function Succex() {
    const use = useNavigate()
  return (
    <>
    
    
    <img src={secces} alt="" className={css.portal} />
    <button onClick={()=>use(-1)} className={css.x}>X</button>
    
    </>
  )
}
