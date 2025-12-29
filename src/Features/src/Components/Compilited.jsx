import React from 'react'
import compilited from '../../../assets/compilited.png'
import css from '../App.module.css'
import { useNavigate } from 'react-router-dom'
export default function Compilited() {
    const use = useNavigate()
  return (
<>
<img src={compilited} alt="" className={css.compilited} onClick={()=>use('/main')} />
<button className={css.x} onClick={()=>use(-1)}> X</button>

</>
  )
}
