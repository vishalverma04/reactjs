import './bgc.css'
import React, { useState } from 'react'
// import BGbutton from './BGbutton'


function backGroundChanger() {

    let [colors,setColors]=useState('red')
    function changeColor(){
      console.log(colors)
      setColors(()=> 'white')
    }
  return (
    <div className='screen' style={{backgroundColor:colors , width:"100%"}} >
    <div className='container'>
    <button onClick={changeColor} className='btn' style={{backgroundColor:'red'}}>red</button>
    <button onClick={changeColor} className='btn' style={{backgroundColor:'white'}}>white</button>
    <button onClick={changeColor} className='btn' style={{backgroundColor:'yellow'}}>yellow</button>
    <button onClick={changeColor} className='btn' style={{backgroundColor:'blue'}}>blue</button>
    <button onClick={changeColor} className='btn' style={{backgroundColor:'purple'}}>purple</button>
    <button onClick={changeColor} className='btn' style={{backgroundColor:'aqua'}}>aqua</button>
     </div>
    </div>
  )
}

export default backGroundChanger
