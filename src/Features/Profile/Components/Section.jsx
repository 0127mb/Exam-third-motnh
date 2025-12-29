import React from 'react'
import house from '../../../assets/house.png'
import stack from '../../../assets/Stack.png'
import css from './Profile.module.css'
export default function Section() {
  return (
  <>
  
 <div className={css.header3}>
     <img src={house} alt="" />
  <a href="">Asosiy</a>
  <img src={stack} alt="" />
  <a href="">Profil</a>
  <img src={stack} alt="" />
  <h3>Sotib olingan kurslar</h3>
 </div>
  </>
  )
}
