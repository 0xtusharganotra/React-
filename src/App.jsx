import { useState } from "react";
import {useFetch} from './../custom_hooks/usefetchwithretrytime'
import './App.css';


function App(){

  const [postno , setpostno] = useState(1);
  const {post , loading} = useFetch(`https://jsonplaceholder.typicode.com/todos/${postno}` , 10 );

  return (
    <>
      <button onClick={()=>setpostno(1)}>----1----</button>
      <button  onClick={()=>setpostno(2)}>----2----</button>
      <button  onClick={()=>setpostno(3)}>----3----</button>
      <br />
      <br />
         
          {loading ? <p>Loading...</p> : <p>{post.title}</p>}


      
    </>
  )
}

export default App;