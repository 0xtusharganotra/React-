import React from "react";
import { useRef , useEffect, useState  } from "react";


// 1. Focus on input box once submit button is clicked
// function App(){
//     const inputref = useRef();

//     function FocusOnInput(){
//         inputref.current.focus();
//     }

//     return(
//         <div>
//             SignUp : <input type="text" ref={inputref} id="name"/>
//             <button onClick={FocusOnInput}>Submit</button>
//         </div>
//     )
// }


// 2. Scroll to the bottom

// function App() {
//   const [messages, setMessages] = useState(["Hello!", "How are you?"]);
//   const chatBoxRef = useRef(null);

//   // Function to simulate adding new messages
//   const addMessage = () => {
//     const newarray = [...messages , "Hey! Its a new message"];
//     setMessages(newarray);
// };

//   // Scroll to the bottom whenever a new message is added
//   useEffect(() => {
//     chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
//   }, [messages]);

//   return (
//     <div>
//       <div 
//         ref={chatBoxRef} 
//         style={{ height: "200px", overflowY: "scroll", border: "1px solid black" }}
//       >
//         {messages.map((msg, index) => (
//           <div key={index}>{msg}</div>
//         ))}
//       </div>
//       <button onClick={addMessage}>Add Message</button>
//     </div>
//   );
// }

// 3. Start and Stop Clock

const buttonstyle = {
    padding : 10,
    backgroundColor : "black",
    color :"white",
    borderRadius : 10,
}
function App(){

    const [count,setCount] = useState(1);
    const timer = useRef();
    function clockstart(){
         let value = setInterval(()=>{
            setCount(c => c+1);
        },1000);
        timer.current = value;
    }

    function clockStop(){
        clearInterval(timer.current);
        
    }

    function restartClock(){
        setCount(0);
        clearInterval(timer.current);
    }
    return(
        <div style={{margin:"30px" , padding:"20px" , width:"40vw" , height:"40vh" , border:"2px solid black", borderRadius:"100px" , display:"flex" , flexDirection:"column" , justifyContent:"center" ,alignItems:"center", gap:20}}>
            <div style={{fontSize:"2rem"}}>{count}</div>
            <div style={{width:"50%", display : "flex",
    flexDirection:"row",
    justifyContent : "space-around",
    alignItems : "center",
    gap:10}}>
            <button style={buttonstyle} onClick={clockstart}>Start</button>
            <button style={buttonstyle} onClick={clockStop}>Stop</button>
            <button style={buttonstyle} onClick={restartClock}>Restart</button>
            </div>
            
        </div>
    )
}

//So what happeing here is once user clicks on Start button a setInterval started increasing the value of count without causing rerender because we are not directly chainging the state, and we are putting the 'value' inside out timer.current which is a useRef or ref variable now when user clicks on stop what basically happens is cleaInterval is called now we cant access 'value' directly beacuse its a local variable so we clear timer.current which is a refrence to value 



export default App