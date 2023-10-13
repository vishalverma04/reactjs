import React from 'react'
import { useState } from 'react'

function Counter() {
    let [count,setcount]=useState(15);
    let increament=()=>{
        console.log(count)
     setcount((count)=> count+1);
     setcount((count)=> count+1);
     setcount((count)=> count+1);
     setcount((count)=> count+1);
     
    //  setcount(count+1);
     console.log(count)
    }
    let decreament=()=>{
        setcount(count-1)
    }
  return (
    <div>
      <h1>counter : {count}</h1>
      <button onClick={increament}>Increament</button>
      <br></br>
      <br></br>
      <button onClick={decreament}>decreament</button>
    </div>
  )
}

export default Counter
