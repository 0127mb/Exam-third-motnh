import React from "react";
import home from "../../../assets/home 1.png";
import styles from "../../reyting/Components/Banner.module.css";
import slack from '../../../assets/Stack.png'
export default function Section({ label }) {
  return (
    <div className={styles.header2}>
      <img src={home} alt="" />
      <a href="">Asosiy</a>
      <img src={slack} alt="" />
      <h4>Reyting</h4>
    </div>
  );
}
