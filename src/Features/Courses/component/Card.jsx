import React, { useState } from "react";
import data from "./Data";
import styles from "../index.module.css";
import { useNavigate } from "react-router-dom";

export default function Card({ card }) {
  const [liked, setliked] = useState(false);
  //  const [added,setadded] = useState(false)
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <div className={styles["image-block"]}>
        <img src={card.img} alt="" className={styles["main-img"]} />

        <span className={styles.rating}>{card.rating}</span>
      </div>

      <div className={styles.middle}>
        <h3
          className={styles.title}
          onClick={() => navigate("/detailofcoursepage")}
        >
          {card.name}
        </h3>
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
      </div>

      <div className={styles.like} onClick={() => setliked(!liked)}>
        {liked ? "❤️" : "🤍"}
      </div>
    </div>
  );
}
