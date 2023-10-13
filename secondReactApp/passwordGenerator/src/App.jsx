import { useState,useCallback,useEffect ,useRef} from 'react'
import './App.css'

function App() {
 let [length,setLength]=useState(18);
 let [numberAllowed,setNumberAllowed]=useState(true);
 let [charAllowed,setCharAllowed]=useState(false);
 let [password,setPassword]=useState("a");
 let newpass=()=>{
    passwordgenerator()
 }

// useref
 let passwordRef=useRef(null) 
let copyPasswordToClipBoard=useCallback(()=>{
  passwordRef.current?.select()
 window.navigator.clipboard.writeText(password)
},[password])

let passwordgenerator= useCallback(()=>{
let pass="";
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
if(numberAllowed) str+="0123456789";
if(charAllowed) str+="@#$%&*!@#$%&*!"

for (let i = 0; i < length; i++) {
   let idx=Math.floor(Math.random()*str.length)
   pass+=str.charAt(idx);
  
}
setPassword(pass);

},[length,numberAllowed,charAllowed,setPassword])

useEffect(()=>{
 passwordgenerator()
},[length,numberAllowed,charAllowed,passwordgenerator])
  return (
    <>
     <h1>password Generator</h1>
     <div className='box'>
     <input className='container' 
     value={password}
      readOnly
      ref={passwordRef} 
     ></input>
     <button className='btn' onClick={copyPasswordToClipBoard}>Copy</button>
     <div className='variable'>
     <div>
      <input type='range' min={6} max={18} onChange={(e)=> 
       {setLength(e.target.value)

    } }></input>
      <label>Length:{length}</label>  
      </div>
      <div>
      <input type='checkbox' defaultChecked={numberAllowed} id='numberInput' onChange={()=>{
        setNumberAllowed((prev)=>!prev)
      }}></input>
      <label>number</label>
      </div>
      <div>
      <input  type='checkbox' defaultChecked={charAllowed} id='charInput' onChange={()=>{
        setCharAllowed((prev)=>!prev)
      }}></input>
      <label>symbol</label>
      </div>
     </div>
     <button onClick={newpass} className='btn newpass'>New Password</button>
     </div>
    </>
  )
  }

export default App
