import {useEffect, useRef} from "react";

export function usePrev(count){
const ref = useRef();

useEffect(()=>{
    ref.current = count;
},[count]);
//this useeffect will only trigger after function has returned 
//Because in react function first returns then effects are triggered 

return ref.current;
}