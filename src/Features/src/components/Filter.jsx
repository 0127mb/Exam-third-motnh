import React from 'react'
import star from '../assets/stars.png'
export default function Filter() {
  return (
 <>
 <div className="Filter">
    <div className="nav1">
        <h4>Filter</h4>
        <a href="">Tozalash</a>
    </div>
    <p>Tilni tanlang</p>
    <select name="" id="selecet">
        <option value="">Barchasi</option>
    </select>
    <p>Darajani tanlang:</p>
        <select name="" id="selecet">
        <option value="">Barchasi</option>
    </select>
    <p>Kategoriya:</p>
       <select name="" id="selecet">
        <option value="">Barchasi</option>
    </select>
    <p>Reyting</p>
    <div className="star">
<img src={star} alt="" className='star1' />   
<img src={star} alt="" className='star1' />
<img src={star} alt=""  className='star1'/>
<img src={star} alt="" className='star1'/>
<img src={star} alt="" className='star1' />
    </div>
 </div>
 </>
  )
}
