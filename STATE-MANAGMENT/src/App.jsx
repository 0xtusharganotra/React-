import { useState  , createContext, useContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BulbProvider , BulbContext} from './BulbProvider'


function App() {
 
  // const [islightbulb , setislightbulb] = useState(true);
  return (
    <>
    {/* <BulbContext.Provider value={{ //2 Setting  up the provider and wrapping up part of application inside it 
      islightbulb : islightbulb,
      setislightbulb : setislightbulb
    }}> */}
    <BulbProvider>

<Light />
    </BulbProvider>
      
      
    </>
  )
}

function Light(){ //Skipped prop drilling from intermediate component  
  
  return(
    <>
    <LightBulb />
    <LightSwitch  />
    </>
  )
}


function LightBulb(){

  const {islightbulb} = useContext(BulbContext);
  return(
    <>
    {
      islightbulb ? <p>Light Bulb On</p> : <p>Ligh Bulb Off</p>
    }
    </>
  )
}

function LightSwitch(){

  const {islightbulb , setislightbulb} = useContext(BulbContext); //3. Consuming the data using useContext(BulbContext)

  function triggeronoff(){
    setislightbulb(!islightbulb);
  }
  return(
    <div>
      <button onClick={triggeronoff}>Toggle Light</button>
    </div>
  )
}
export default App

