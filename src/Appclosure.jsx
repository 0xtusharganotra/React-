import { useState , useEffect } from "react";

function App(){
    const [showtimer , setshowtimer] = useState(true);

    useEffect(()=>{
        setInterval(function(){
            setshowtimer(timershow => !timershow);
        },5000);
    },[])

    return(
        <div>
            {
                showtimer && <Timer/> // if showtimer is true Timer component will be shown and once showtimer turns false Time component will hide or technically get unmounted
            }
        </div>
    )
}

function Timer(){
    const [count,setcount] = useState(0);

    function timerfunc(){
        console.log("Log anything"); //we will observe even though component is not getting shown technically unmounted , its logging in console that means its still running, so to treat this and protect from memroy leak we use closures
        setcount(currentval => currentval + 1); 
    }

    useEffect(()=>{
        let clock = setInterval(timerfunc , 1000);

        return ()=>( //closure - this will run when component unmounts
            clearInterval(clock) //this will stop clock/setInterval ass soon as component unmounts
        );
    },[]);

    return(
        <div>
            {count}
        </div>
    )
}

export default App