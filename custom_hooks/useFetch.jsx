import { useState , useEffect } from "react"
import axios from "axios";



export function useFetch(url){

    const [post , setpost ] = useState({});

async function getpost(){
    try{
    const res = await axios.get(url);
    setpost(res.data);
    }
    catch(e){
        console.log(e);
    }
}

useEffect(()=>{
    getpost();
} , [])




    return post; 
}