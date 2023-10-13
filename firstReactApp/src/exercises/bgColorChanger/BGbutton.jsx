import React, { useState } from 'react'
import './btnStyle.css'
function button({colors='white'}) {
  function changeColor(){
    
    console.log(colors)
  }
  return (
    <div>
      <button onClick={changeColor} className='btn' style={{backgroundColor:colors}}>{colors} </button>
    </div>
  )
}

export default button
