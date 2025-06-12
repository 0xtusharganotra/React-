import { useEffect, useState  } from "react";
import axios from 'axios'; 


function App(){
 const [currentTab , setCurrentTab] = useState(1);
 const [tabdata , settabdata] = useState({});
 const [Loading , setLoading] = useState(true);

 useEffect( ()=>{
    async function fetchdata(){
        setLoading(true); 
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${currentTab}`);
    settabdata(res.data);
    setLoading(false); 
    }
    fetchdata();
    

 } , [currentTab])

return(
    <div>
        <button onClick={function(){
            setCurrentTab(1)
        }} style={{color : currentTab == 1 ? "red" : "black" , padding:10 , margin:10}}> Todo #1 </button>
        <button onClick={function(){
            setCurrentTab(2)
        }} style={{color : currentTab == 2 ? "red" : "black" , padding:10 , margin:10}}> Todo #2 </button>
        <button onClick={function(){
            setCurrentTab(3)
        }} style={{color : currentTab == 3 ? "red" : "black" , padding:10 , margin:10}}> Todo #3 </button>
        <button onClick={function(){
            setCurrentTab(4)
        }} style={{color : currentTab == 4 ? "red" : "black" , padding:10 , margin:10}}> Todo #4 </button>

        {Loading ? "Loading..." : tabdata.title}
    </div>
)
}

export default App