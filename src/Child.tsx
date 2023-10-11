import { useState,useEffect } from 'react';

import './App.css'
import Name from "./Name"

function Child() {

  // how to handle types when the function is async

   useEffect(()=>{
        loadCards()
    },[])

   async function loadCards():Promise<number>{
              return 1 
    }
  
const name : string = "abhishek";
const [count,setCount] = useState(0)
  return (
    <>
     <Name 
     sendName = {name} 
     list={["abc"]}
     onChangeHandler={(e:React.ChangeEvent<HTMLInputElement>)=>console.log(e.target.value)}
     >
      <p>I am passing children</p>
     </Name>

       <button onClick={()=>setCount(count+1)}>inc</button> <span>{count}</span>
   <button onClick={()=>setCount(count-1)}>dec</button>

      <input type='number' onChange={(e)=>setCount(parseInt(e.target.value))} />   {/*Now you can see that setCount(e.target.value) is throwing an error
       this is because e.target.value is a string and count is a number so how can we resolve it
      */}
   <p>{count}</p>
      
    </>
  )
}

export default Child
