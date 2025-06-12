const style = {
  width : 400,
  backgroundColor : "white",
  borderRadius : 10,
  borderColor : "white",
  borderWidth : 1,
  padding : 15,
  marginTop : 20,
  marginBottom :20
}

export function PostComponent(props){
  return (
    <div style={style}>
      <div style={{display : "flex" , backgroundColor : "white" , width:200 , borderRadius:10 , marginBottom:10}}>
      <img src={props.image} style ={{
        width : 40,
        height : 40,
        marginRight :"10px",
        borderRadius : 20
      }} alt="" />
      <div style={{fontSize:12}}>
        <b>{props.name}</b>
        <div>{props.subtitle}</div>
        {
          props.time !== undefined ? <div>{props.time}</div> : <div>Nothing to show</div>
        }
      </div>
      </div>
      <div>
       {props.desc}
      </div>

    </div>
  )
}

//Whenever we pass prop