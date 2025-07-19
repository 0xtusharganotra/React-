import { useState } from "react";

export function useCounter(){
    
  const [count,setcount] = useState(0);

  function increasecount(){
    setcount(count+1);
  }

  return {
    count : count,
    increasecount : increasecount
  };
  }

  