import React from "react";
import star from "../assets/stars.png";
import styles from "../App.module.css";
import stylesIndex from "../index.module.css";
export default function Filter() {
  return (
    <>
      <div className={stylesIndex.Filter}>
<div className={stylesIndex.allinone}>
            <div className={styles.nav1}>
          <h4>Filter</h4>
          <a href="">Tozalash</a>
        </div>
        <p>Tilni tanlang</p>
        <select name="" id={stylesIndex.selecet}>
          <option value="">Barchasi</option>
        </select>
        <p>Darajani tanlang:</p>
        <select name="" id={stylesIndex.selecet}>
          <option value="">Barchasi</option>
        </select>
        <p>Kategoriya:</p>
        <select name="" id={stylesIndex.selecet}>
          <option value="">Barchasi</option>
        </select>
        <p>Reyting</p>
        <div className={stylesIndex.star}>
          <img src={star} alt="" className={styles.star1} />
          <img src={star} alt="" className={styles.star1} />
          <img src={star} alt="" className={styles.star1} />
          <img src={star} alt="" className={styles.star1} />
          <img src={star} alt="" className={styles.star1} />
        </div>
</div>
      </div>
    </>
  );
}
