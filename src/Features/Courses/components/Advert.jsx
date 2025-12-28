import React from "react";
import advert from "../assets/advert.png";
import styles from "../App.module.css";

export default function Advert() {
  return (
    <>
      <img src={advert} alt="" className={styles.Advert} />
    </>
  );
}
