import { useState } from "react";
import { usePrev } from "../custom_hooks/usePrev";
import './App.css'

function App(){

  const [count , setcount] = useState(0);
  const prev = usePrev(count);
  return(
    <>
      <p>{count}</p>
      <button onClick={()=>setcount(count+1)}>Increment {prev}</button>
    </>
  )
}

export default App