
import React from "react";
import home from "../../../assets/home 1.png";
import styles from '../../News/Components/News.module.css'
import slack from '../../../assets/Stack.png'
import { useNavigate } from "react-router-dom";

export default function Section({ label }) {
    const navigate = useNavigate()

  return (
    <div className={styles.header2}>
      <img src={home} alt="" />
      <span onClick={()=> navigate('/main')}>Asosiy</span>
      <img src={slack} alt="" />
      <span onClick={()=> navigate('/news')} >Yangiliklar</span>
      <img src={slack} alt="" />
      <h4>O‘zbekiston shaxmatchilari olimpiadada Armanistonlik raqiblarini mag‘lub etishdi</h4>
    </div>
  );
}