import React, { useState } from 'react'
import data from './Data'
import { useNavigate } from 'react-router-dom'

export default function Card2() {
    const [liked,setliked] = useState(false)
    const navigate = useNavigate()
     const [added,setadded] = useState(false)
  return (
    <div className="card">

      {/* LEFT IMAGE BLOCK */}
      <div className="image-block">
        <img src={data[1].img} alt="" className="main-img" />

        <span className="rating">
           {data[1].rating}
        </span>

     
      </div>

 
      <div className="middle">
        <h3 className="title" onClick={()=>navigate('/detailoflibary')}>{data[1].name}</h3>
        <p className="writer">{data[1].writer}</p>

        <p className="old-price">{data[1].discount}</p>
        <p className="new-price">{data[1].now}</p>

        <div className="infos">
          <div className="info">
            <img src={data[1].icon} />
            <p className='a'>{data[1].valueoficons}</p>
          </div>

          <div className="info">
            <img src={data[1].icon2} />
            <p className='a'>{data[1].valueoficons1}</p>
          </div>

          <div className="info">
            <img src={data[1].icon3} />
            <p className='a'>{data[1].valueoficons2}</p>
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
