import { useState } from 'react'
import { PostComponent } from './components/post'


function App() {

  const [Post,setPost] = useState([{ //state variable initialising Post as array 
    time : "12:00 pm",
    desc : " What to know how to win big ? Check out how did this guy did it"
  }])

  function addpost(val , time){
    const newarray = [...Post , { //this is how we insert value inside array 
      time : time,
      desc : val
    }];

    setPost(newarray); //changing value of Post to newarray
  }

  return (
    <div style ={{backgroundColor:"gray" , height:"100vh" , display:"flex"  ,alignItems:"center" , flexDirection: "column" , }}>
      <UserInputbox addpost={addpost}/> 
      {/* passing function inside component */}
      

      {
        Post.map( (post , key) => (
          <PostComponent key={key} name={"Tushar Ganotra"} subtitle={"10,000 Followers"} time={post.time} image = {"https://media.licdn.com/dms/image/v2/C5603AQFrtVCOoP-z0A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1601720046945?e=1755129600&v=beta&t=ti_Y0tw2bSszJYuKE0Rn1kyAFOmgxZ8hGPT7kD4Bdks"} desc = {post.desc}/>
          //key is very important when ever we pass props inside component which is an array its important to pass key
        ))
      }
        </div>
  )
}



const styelinputboxdiv = {
  width :400,
  height : 30,
  marginTop:50,
  marginBottom:20,
  borderRadius:10,
  backgroundColor: "white",
  display : "flex",
  justifyContent : "space-between",
  alignItems : "center",
  padding:15,
  gap :10
}

function UserInputbox({addpost}){

  const [val , setval] = useState(""); // 
  function addpos(){
    const date = new Date();
    const time = `${date.getMinutes()}:${date.getSeconds()} Pm`;
    addpost(val , time);
    setval(""); // it is important to set value of val to empty otherwise it will be displayed in input as 'vaue' property in input is to show default value
  }

  return(
    <div style = {styelinputboxdiv}>
      <input type="text" style={{width:360 , height:30,  outline:"none", border: "none" , borderRadius :4   }} placeholder='Write Post' value={val} onChange={v => setval(v.target.value)} />
      <button onClick={addpos} style={{backgroundColor : "Black", cursor:"pointer", width:"auto", padding:8, borderRadius:10, color : "white" }}>Post</button>
    </div>
  )
}

// value={val} onChange={v => setval(v.target.value)}
//this is important we dont use DOM in react so we cant use document.getElementsByTagname(input) so we use value={val}
//here val initially has value "" but whenever we enter something in input , onChange will be triggered and new value will be made equal to val using setval(e.target.value)
//


export default App
