import { useState } from "react";
import { useEffect } from "react";

function App(){

    const [count,setcount] = useState(1);
    const [count2 , setcount2] = useState(1);

    function increaseCount(){
        setcount(currentval => currentval + 1);
        
        //here setCount(count+1) wont work but currentval wwill work because count is a state variable and when Component was mounted value of count was 1, so it will alwats be 1 as function increasecount was executed in setinterval at that time 
        //but with currentval its a local variable whose value keeps on changing inside function only and react thinks that state cis changing instead and it re renders the component ultimately chainging the value of count too
        
    }

    function decrementCount(){
        setcount2(currentval => currentval - 1);
    }

    useEffect(()=>{
        setInterval(increaseCount,1000);
        setInterval(decrementCount , 5000);  // value of count = 1 , always as useEffect is executed only at component mounting
        console.log("only when mounts");
    },[])

    useEffect(() => {
        console.log(`value of count :  ${count}`);
        console.log(`value of count2 :  ${count2}`);
    }, [count , count2]); // Dependency array includes count , count2 but will run even if one out of two state variable changes


    
return(
    <div>
        <div style={{width:20 , height:20 , backgroundColor:"red" , borderRadius:50 , textAlign:"center" , margin:100 ,padding:10}}>{count}</div>
                <div style={{width:20 , height:20 , backgroundColor:"red" , borderRadius:50 , textAlign:"center" , margin:100 ,padding:10}}>{count2}</div>
    </div>
)
}

export default App