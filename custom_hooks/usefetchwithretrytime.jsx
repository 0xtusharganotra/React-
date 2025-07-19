import { useState , useEffect } from "react";
import axios from "axios";

export function useFetch(url , retrytime){
    const [loading ,setloading] = useState(true);

    const [post , setpost ] = useState({});

async function getpost(){
    try{
        setloading(true);
    const res = await axios.get(url);
    setpost(res.data);
    setloading(false);
    console.log(res.data);
    }
    catch(e){
        console.log(e);
    }
}

useEffect(()=>{
    //intial call
    getpost();

    //call after every 10 seconds 

    const interval = setInterval(()=>getpost() , retrytime*1000);

    return ()=>( clearInterval(interval)); // this will clear the previous setInterval as soon as the useEffects get unounted when we click on any other button
       
    
} , [url])



    return {post , loading}; 
}