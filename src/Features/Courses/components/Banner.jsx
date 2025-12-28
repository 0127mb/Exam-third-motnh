import React from "react";
import book from "../assets/book.svg";
import styles from "./Banner.module.css";
export default function Banner() {
  return (
    <>
      <div className={styles.banner}>
        <img src={book} alt="" />
        <h4> Kurslar</h4>
      </div>
    </>
  );
}
