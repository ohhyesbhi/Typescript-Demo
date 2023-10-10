

import './App.css'
import Name from "./Name"

function Child() {
  
const name : string = "abhishek";

  return (
    <>
     <Name 
     sendName = {name} 
     list={["abc"]}
     onChangeHandler={(e:React.ChangeEvent<HTMLInputElement>)=>console.log(e.target.value)}
     >
      <p>I am passing children</p>
     </Name>
    </>
  )
}

export default Child
