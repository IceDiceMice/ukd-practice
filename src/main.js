import React from 'react'
import {Link} from 'react-router-dom'
export default function Main() {
    return (
        <div>
           <header>
               <button type="button" >Вийти</button>
           </header>
           <body>
               <Link to="/posts"><h1>Posts</h1></Link>
               <Link to="/users"><h1>Users</h1></Link>
           </body>
        </div>
    )
}
