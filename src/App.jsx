import { useState } from "react";
import { useFetch } from "./custom_hooks/useFetch";
import './App.css';


function App(){

  const post = useFetch("https://jsonplaceholder.typicode.com/todos/1");

  return (
    <>
       <p>{post.title}</p>
      
    </>
  )
}

export default App;