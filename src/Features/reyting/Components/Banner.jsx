import React from "react";
import book from "../../../assets/trading.png";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <img src={book} alt="" />
      <h4>Reyting</h4>
    </div>
  );
}
