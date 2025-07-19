
import { useState , useEffect} from "react";

export function useDebounce(value , delay){
    const [debouncevalue , setdebouncevalue] = useState(value);

    useEffect(()=>{

        const interval = setTimeout(()=>{
            setdebouncevalue(value);
        },delay);


        return ()=> clearTimeout(interval); 

    },[value , delay]);

    return debouncevalue;
}