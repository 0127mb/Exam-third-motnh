import React from "react";
import book from "../../../assets/newclock.png";
import styles from "./salom.module.css";

export default function Newbanner() {
  return (
    <div className={styles.banner}>
      <img src={book} alt="" />
      <h4>O‘yinlar</h4>
    </div>
  );
}
