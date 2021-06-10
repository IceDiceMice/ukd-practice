import React,{useState, useEffect}   from 'react'
import {Link, Redirect} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {AddItem} from './reducer'

export default function Main() {
  
    const [redirect, setRedirect] = useState(false)
    const text = useSelector(reduxState => reduxState?.text)
    console.log(text)
    const dispatch = useDispatch()

useEffect(() => {
    if (!text){
        setRedirect(true);
       console.log(text)
           } 
}, [text])

  const handleClick=(e)=>{
      e.preventDefault();
      dispatch({
        type: AddItem,
        payload: ""
    })
     
    
      if (!text){
        setRedirect(true);
       console.log(text)
           } 
  }

    if (redirect){
        return  <Redirect to="/" />
    }
    return (
        <>
          
           <div>
           <header className="header">
         <h1 style={{color: '#fff'}}>Hello {text}</h1>
               <button type="submit" className="exit-button" onClick={handleClick}>Log out</button>
               
           </header>
           </div>
           <div className="header-body">
               <Link to="/posts"><h1 className="options">Posts</h1></Link>
               <Link to="/users"><h1 className="options">Users</h1></Link>
               </div>
           
      </>
    )
}
