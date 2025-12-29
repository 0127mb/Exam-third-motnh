import React, { useState } from 'react'
import data from './Data'

export default function Card4() {
    const [liked,setliked] = useState(false)
     const [added,setadded] = useState(false)
  return (
    <div className="card">

      {/* LEFT IMAGE BLOCK */}
      <div className="image-block">
        <img src={data[3].img} alt="" className="main-img" />

        <span className="rating">
           {data[3].rating}
        </span>

     
      </div>

 
      <div className="middle">
        <h3 className="title">{data[3].name}</h3>
        <p className="writer">{data[3].writer}</p>

        <p className="old-price">{data[3].discount}</p>
        <p className="new-price">{data[3].now}</p>
        <div className="infos">
          <div className="info">
            <img src={data[3].icon} />
            <p className='a'>{data[3].valueoficons}</p>
          </div>

          <div className="info">
            <img src={data[3].icon2} />
            <p className='a'>{data[3].valueoficons1}</p>
          </div>

          <div className="info">
            <img src={data[3].icon3} />
            <p className='a'>{data[3].valueoficons2}</p>
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

    
      <div className="like" onClick={()=> setliked(! liked)}>
     
       {liked ? '❤️' : '🤍'}
       

      </div>

    </div>
  )
}
