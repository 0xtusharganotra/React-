import { useState } from 'react'
import { PostComponent } from './components/post'


function App() {

  const [Post,setPost] = useState([{
    time : "12:00 pm",
    desc : " What to know how to win big ? Check out how did this guy did it"
  }])

  function addpost(time , val){
    const newarray = [...Post , {
      time : time,
      desc : val
    }];

    setPost(newarray);
  }

  return (
    <div style ={{backgroundColor:"gray" , height:"100vh" , display:"flex"  ,alignItems:"center" , flexDirection: "column" , }}>
      <UserInputbox addpost={addpost}/>

      

      {
        Post.map( (post , key) => (
          <PostComponent key={key} name={"Tushar Ganotra"} subtitle={"10,000 Followers"} time={post.time} image = {"https://media.licdn.com/dms/image/v2/C5603AQFrtVCOoP-z0A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1601720046945?e=1755129600&v=beta&t=ti_Y0tw2bSszJYuKE0Rn1kyAFOmgxZ8hGPT7kD4Bdks"} desc = {post.desc}/>
  
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
  return(
    <div style = {styelinputboxdiv}>
      <input type="text" style={{width:360 , height:30,  outline:"none", border: "none" , borderRadius :4   }} placeholder='Write Post'/>
      {
        let date = new Date();
        let time = `${date.getMinutes()}:${date.getSeconds()} Pm`;
        const val = document.getElementsByTagName(input)[0].value;
      }
      <button onClick={addpost( val , time )} style={{backgroundColor : "Black", cursor:"pointer", width:"auto", padding:8, borderRadius:10, color : "white" }}>Post</button>
    </div>
  )
}



export default App
