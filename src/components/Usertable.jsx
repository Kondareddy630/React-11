import React, { use, useEffect, useState } from 'react'

function Usertable(props) {


const[users,setUsers]=useState([]);


function loadUsers()
{

    fetch("https://randomuser.me/api/?results=20")
    .then((res)=>res.json())
    .then((myusers)=>setUsers(myusers.results))
    .catch((error)=>console.log(error))

}

loadUsers();


function sendData(user){

     props.senduser(user);
}

  return (
    <div>


   <table className='table table-bordered shadow table-striped'>

    <thead>
       <tr>
         {
            ["Name","City","Country","State","PostCode"].map((h)=><th>{h}</th>)
        }
       </tr>
    </thead>

    <tbody>
        {
            users.map((user)=>
                <tr onClick={()=>sendData(user)}>
                    <td>{user.name.first}</td>
                    <td>{user.location.city}</td>
                    <td>{user.location.country}</td>
                     <td>{user.location.state}</td>
                      <td>{user.location.postcode}</td>
                    
                </tr>
            )
        }

    </tbody>

   </table>


       
    </div>
  )
}

export default Usertable