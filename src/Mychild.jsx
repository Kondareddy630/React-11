import React, { useState } from 'react'

function Mychild(props) {


    const[msg,setState]=useState("good morning");

    function sendData()
    {
        props.hello(msg);

    }

  return (
    <div>

        <h2>{msg}</h2>

        <button className='btn btn-primary' onClick={sendData}>Click Me</button>

    </div>
  )
}

export default Mychild