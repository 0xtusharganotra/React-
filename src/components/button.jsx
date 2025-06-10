
export function Button(props){ //button component
//passed count and setcount (state variables as props in component)
  function onbuttonclick(){
    props.setCount(props.count + 1); //changing state 
  } // whenever state changes ie value of count changes Button component will re-render/ update 
  return(
   <button onClick={onbuttonclick}> Counter {props.count}</button>
  )
}

