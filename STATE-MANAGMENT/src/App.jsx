import { useState  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
 

//   return (
//     <>
//       <Light />
//     </>
//   )
// }

// function Light(){
//   const [islightbulb , setislightbulb] = useState(true);
//   return(
//     <>
//     <LightBulb islightbulb={islightbulb}/>
//     <LightSwitch islightbulb = {islightbulb} setislightbulb = {setislightbulb} />
//     </>
//   )
// }


// function LightBulb({islightbulb}){
//   return(
//     <>
//     {
//       islightbulb ? <p>Light Bulb On</p> : <p>Ligh Bulb Off</p>
//     }
//     </>
//   )
// }

// function LightSwitch({islightbulb , setislightbulb}){

//   function triggeronoff(){
//     setislightbulb(!islightbulb);
//   }
//   return(
//     <div>
//       <button onClick={triggeronoff}>Toggle Light</button>
//     </div>
//   )
// }
// export default App


function App(){
  const [Count ,setCount]  = useState(0);
  return(
    <>
    <Increase setCount = {setCount}/>
    <Decrease setCount = {setCount} />
    <Value Count = {Count}/>
    </>
  )

}

function Increase({setCount}){
  function increasecounter(){
    setCount(v => v+1);
  }
  return(
    <>
    <button onClick={increasecounter}>Increase</button>
    </>
  )
}

function Decrease({setCount}){
  function decreaseCount(){
    setCount(v => v-1);
  }
  return(
    <>
    <button onClick={decreaseCount}>Decrease</button>
    </>
  )
}

function Value({Count}){
  return(
    <div>
      Count : {Count};
    </div>
  )
}

export default App