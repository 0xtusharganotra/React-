import { useState } from 'react'


function App() {
  const [todos, settodos] = useState([{
    title : "Go to Gym",
    desc : "Hit the Gym bio!",
    done : false
  }]);

  function addtodo(){
    let newArray = [...todos,{
      title : document.getElementById("title").value,
      desc : document.getElementById("desc").value,
      done : false
    }];

    settodos(newArray);
    
  }

  return (
    <div>
      <input type="text" id='title' />
      <input type='text' id="desc"/>
      <button onClick={addtodo}></button>
      <Todo todos = {todos}/>
    </div>
  )
}

function Todo(props){
  return(
    <div>
      {
        props.todos.map((todo,id) => (
          <div key={id}>
            <h1>{todo.title}</h1>
            <p>{todo.desc}</p>
            </div>
        ))
      }
    </div>
  )
}

export default App
