import React, { useState } from "react";
import data from "./Data";
import styles from "../index.module.css";

export default function Card3({ card }) {
  const [liked, setliked] = useState(false);
  //  const [added,setadded] = useState(false)
  return (
    <div className={styles.card}>
      {/* LEFT IMAGE BLOCK */}
      <div className={styles["image-block"]}>
        <img src={card.img} alt="" className={styles["main-img"]} />

        <span className={styles.rating}>{card.rating}</span>
      </div>

      <div className={styles.middle}>
        <h3 className={`${styles.title} ${styles.blue}`}>{card.name}</h3>
        <p className={styles.writer}>{card.writer}</p>

        <p className={styles["old-price"]}>{card.discount}</p>
        <p className={styles["new-price"]}>{card.now}</p>

        <div className={styles.infos}>
          <div className={styles.info}>
            <img src={card.icon} />
            <p className={styles.a}>{card.valueoficons}</p>
          </div>

          <div className={styles.info}>
            <img src={card.icon2} />
            <p className={styles.a}>{card.valueoficons1}</p>
          </div>

          <div className={styles.info}>
            <img src={card.icon3} />
            <p className={styles.a}>{card.valueoficons2}</p>
          </div>
        </div>
        {/* <button
  onClick={() => setadded(!added)}
  style={{
    backgroundColor: added ? "grey" : "blue",
    color: "white",
  }}
>
  {data[4].button}
  <img src={data[4].btn} alt="" />
</button> */}
      </div>

      <div className={styles.like} onClick={() => setliked(!liked)}>
        {liked ? "❤️" : "🤍"}
      </div>
    </div>
  );
}
