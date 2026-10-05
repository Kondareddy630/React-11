import React, { useEffect, useState } from 'react'

function Change() {


  const[username,setuserName]=useState("hello");


  function changeUsername(e){
    setuserName(e.target.value);
  }



  return (
    <div>
        <pre>
            {
                JSON.stringify(username)
            }
        </pre>

        <input type='text' placeholder='Username' value={username} onChange={changeUsername} />

    </div>
  )
}

export default Change