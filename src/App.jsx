import { useState } from "react";
import {useDebounce} from './../custom_hooks/useDebounce'
import { useEffect } from "react";
import './App.css'

function App(){
//creating for search
const [value , setvalue] = useState("");
const debouncer = useDebounce(value , 200);

useEffect(()=>{
  //some expensive operation maybe fetching 
  console.log("expensive operation happeing");
} , [debouncer]);

return(
  <>
  <p>Enter value</p>
  <input type="text" value = {value} onChange={(e)=>setvalue(e.target.value)} />
  {/* always use values = {values} with onChange */}
  </>
)
}

export default App