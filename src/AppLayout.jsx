import React from "react";
import {Link , BrowserRouter , Routes , Route, Outlet} from 'react-router-dom';

function App(){
return(
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/class11" element={<Class11/>}/>
                <Route path="/class12" element= {<Class12/>}/>
                <Route path="/" element={<Home/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
)
}

function Class11(){
return(
    <div style={{marginTop:"50px" , width:"100%" , height:"70vh"}}>
        Neet courses for class 11
    </div>
)
}

function Class12(){
return(
    <div style={{marginTop:"50px" , width:"100%" , height:"70vh"}}>
        Neet courses for class 12
    </div>
)
}

function Header(){
    return(
        <div style={{width:"100vw" , height:"70px" ,  backgroundColor:"black" , color:"white" , display:"flex" , justifyContent:"space-around" , alignItems:"center"}}>
        <Link style={{textDecoration:"none" , color:"white"}} to="/">Home</Link>
        <Link style={{textDecoration:"none" , color:"white"}} to="/class11">Class11</Link>
        <Link style={{textDecoration:"none" , color:"white"}} to="/class12">Class12</Link>
        </div>
    )
}

function Layout(){
        
    return(
        <div style={{width:"100vw" , height:"100vh" , padding:"10" , border :"2px solid black" , textAlign:"center"}}>
        <Header/>
            <Outlet/>
        <div>this is footer</div>
        </div>
        
    )
}

function Home(){
return(
    <div style={{marginTop:"50px" , width:"100%" , height:"70vh"}}>
        This is home Buddy! Welcome Back
    </div>
)
}
export default App;