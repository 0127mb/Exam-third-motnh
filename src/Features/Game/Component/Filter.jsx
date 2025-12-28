import React from "react";
import star from "../../../assets/stars.png";
import styles from "./salom.module.css";

export default function Filter() {
  return (
    <div className={styles.Filter}>
      <div className={styles.nav1}>
        <h4>Filter</h4>
        <a href="">Tozalash</a>
      </div>
      <p>Mamlakatni tanlang:</p>
      <select name="" id="selecet">
        <option value="">Barchasi</option>
      </select>
      <p>Toifa:</p>
      <select name="" id="selecet">
        <option value="">Barchasi</option>
      </select>
 
  
    </div>
  );
}
