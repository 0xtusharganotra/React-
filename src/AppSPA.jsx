import React from "react";
import { BrowserRouter , Routes , Route , Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App(){

    
    
    return(
        <div>
            <BrowserRouter>
            <Link to="/">Allen</Link> 

            
           <Link to="/neet/online-coaching-class-11">Class 11</Link>
           <Link to="/neet/online-coaching-class-12">Class 12</Link>
           <Link to="*">Anything</Link>
             
            <Routes>
                <Route path="/neet/online-coaching-class-11" element={<Calss11program/>}/>
                <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}/>
                <Route path="/" element={<Landing/>}/>
                {/* 404 route when user visits any other route */}
                <Route path="*" element={<Comp404/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}


function Calss11program(){
    return(
        <div>
        Neet Programs for class 11 th
        </div>
    )
}
function Class12Program(){
    return(
        <div>
        Neet programs for calss 12 th
        </div>
    )
}

function Landing(){
    return(
        <div>
        This is home page
        </div >
    )
}

function Comp404(){
    const navigate = useNavigate(); 
    setTimeout(()=>{
        navigate("/"); // with this whenever a user visit  404 page he will be redirected to home page in 1 sec
    },1000);
    return(
        <div>
            404 page
        </div>
    )
}
export default App

//so Link is basically an alternative for a tag in html for doing making spas which means page wont reload when we click on link content will change dynamically
// And UseNavigate is an alternative for window.location.href which for making spa's which can be userd in auth which means as soon as user is authenticated he will be reidrected to dashboard
//UseNavigate is a hook BTW