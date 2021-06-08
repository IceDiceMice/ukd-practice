import React, {useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

export default function Login() {
    const [state, setState] = useState("")
    const [redirect, setRedirect] = useState(false)
   

const handleSubmit = (e)=>{
    e.preventDefault();
    
    console.log(state)
    if (state !== ""){
 setRedirect(true);
 console.log(redirect);
    } 
      
}
if (redirect){
    return  <Redirect to="/main" />
}

    return (
    
        <div className="login-form">
        

<form onSubmit={handleSubmit}>
<h1>User Name</h1>
<input type="text" value={state} onChange={(e)=>setState(e.target.value)}></input>
<button type="submit">Submit</button>
</form>


            <p>Hello</p>
        </div>
    )
}

