import React, { useState } from 'react'
import './Carditem.css'


export default function Carditem(props) {
    const [counter,setcounter] = useState(1)
    const [remove,setremove] = useState(false)
    function plus (){

    setcounter (counter + 1)


    }
        function minus (){

       if( counter > 1  ){
setcounter (counter - 1)
       }    }
       function handleremove (){
        const sure = confirm('siz haqqattan ham item cardni ochirmoqchimisiz')
        if(sure){
          setremove (true)
          const yes  = confirm('item remove has been succesful if you want to return item refresh the page')
if(yes){
  setTimeout(()=>{
    window.location.reload();
  }, 3000)
}

        }
   
       }


  return (
    <>
    <div className="Item" style={{  display: remove ? 'none': 'block' }}>
        <button className='remove' onClick={  handleremove } >{props.remove}</button>
        <img src={props.img} alt="" className='img'/>
        <h2>{props.name}</h2>
        <div className="purches">
            <span className='current'>{props.price}</span>
            <p className='discount'>{props.discount}</p>
           <div className="counter">
          <button onClick={ minus} disabled ={counter === 1}          style={{
    backgroundColor: counter > 1  ? "red" : "rgba(255, 255, 255, 0.12)",
    color: "white",
  }} className='minus' > {props.button2}</button>
            <div className="result">{counter}</div>
          
                 <button onClick={plus} className='plus'>{props.button1}</button>
   
            
           
           </div>
        </div>

    </div>
     
    
    </>
  )
}
