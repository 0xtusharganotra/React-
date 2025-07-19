import { useState , useEffect } from "react"
import axios from "axios";



export function useFetch(url){

    const [loading ,setloading] = useState(true);

    const [post , setpost ] = useState({});

async function getpost(){
    try{
        setloading(true);
    const res = await axios.get(url);
    setpost(res.data);
    setloading(false);
    }
    catch(e){
        console.log(e);
    }
}

useEffect(()=>{
    getpost();
} , [url])



    return {post , loading}; 
}