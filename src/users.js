import React, {useState, useEffect} from 'react'
import Main from './main'
const Users = () =>{
    const [data, setData] = useState([])
    const [sortId, setSortId] = useState(false)
    const [sortName, setSortName] = useState(false)

const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
const users = await response.json();
setData(users)

    }
    useEffect(() => {
      getUsers();
     }, [])
    const sortByIdUp = ()=>{
      setData( data.sort(function (a, b) {
            if (a.id < b.id) {
              return 1;
            }
            if (a.id > b.id) {
              return -1;
            }
            return 0;
          }));
          setSortId(true)
          
    }
    const sortByIdDown = ()=>{
        setData( data.sort(function (a, b) {
              if (a.id > b.id) {
                return 1;
              }
              if (a.id < b.id) {
                return -1;
              }
              return 0;
            }));
            setSortId(false)
            
      }
      const sortByNameUp = ()=>{
        setData( data.sort(function (a, b) {
              if (a.name < b.name) {
                return 1;
              }
              if (a.name > b.name) {
                return -1;
              }
              return 0;
            }));
            setSortName(true)
            setSortId(true)
            
      }
      const sortByNameDown = ()=>{
        setData( data.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            }));
            setSortName(false) 
            setSortId(true)  
      }
  

console.log(data)
    return (
        <div>
        <Main />
<button onClick={sortByIdUp}>Сортування з кінця по id</button>
<button onClick={sortByIdDown}>Сортування з початку по Id</button><br/>
<button onClick={sortByNameUp}>Сортування з кінця  по name</button>
<button onClick={sortByNameDown}>Сортування з початку по name</button>
         { data.map((user)=>{
          if(sortId==false) {return(
           <p>
           email={user.email}     
              id={user.id}             
              name={user.name}             
              phone={user.phone}            
              username={user.username}           
              website={user.website} 
              </p> )
          } 
          else if(sortId){
              return(<p>
           email={user.email}     
              id={user.id}             
              name={user.name}             
              phone={user.phone}            
              username={user.username}           
              website={user.website} 
              </p>)
          }  else if(sortName==false || sortId){
              return(<p>
           email={user.email}     
              id={user.id}             
              name={user.name}             
              phone={user.phone}            
              username={user.username}           
              website={user.website} 
              </p>)
          }  else if(sortName || sortId){
              return(<p>
           email={user.email}     
              id={user.id}             
              name={user.name}             
              phone={user.phone}            
              username={user.username}           
              website={user.website} 
              </p>)
          }
          
              })}
        </div>
    )
}
export default Users;

