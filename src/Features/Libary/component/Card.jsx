import React, { useState } from "react";
import data from "./Data";

export default function Card() {
  const [liked, setliked] = useState(false);
  const [added, setadded] = useState(false);
  return (
    <div className="card">
      {/* LEFT IMAGE BLOCK */}
      <div className="image-block">
        <img src={data[0].img} alt="" className="main-img" />

        <span className="rating">{data[0].rating}</span>

        <span className="tag">PY</span>
      </div>

      <div className="middle">
        <h3 className="title">{data[0].name}</h3>
        <p className="writer">{data[0].writer}</p>

        <p className="old-price">{data[0].discount}</p>
        <p className="new-price">{data[0].now}</p>

        <div className="infos">
          <div className="info">
            <img src={data[0].icon} />
            <p className="a">{data[0].valueoficons}</p>
          </div>

          <div className="info">
            <img src={data[0].icon2} />
            <p className="a">{data[0].valueoficons1}</p>
          </div>

          <div className="info">
            <img src={data[0].icon3} />
            <p className="a">{data[0].valueoficons2}</p>
          </div>
        </div>
        <button
          onClick={() => setadded(!added)}
          style={{
            backgroundColor: added ? "grey" : "blue",
            color: "white",
          }}
        >
          {data[4].button}
          <img src={data[4].btn} alt="" />
        </button>
      </div>

      <div className="like" onClick={() => setliked(!liked)}>
        {liked ? "❤️" : "🤍"}
      </div>
    </div>
  );
}
