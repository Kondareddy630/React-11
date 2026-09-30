import React, { useState } from 'react'
import Mychild from './Mychild'

function Parent() {

    const[message,setMessage]=useState("");

    function receiveData(data)
    {

        setMessage(data)
    }

  return (
    <div>Parent

<h2>{message}</h2>


<Mychild hello={receiveData}></Mychild>


    </div>
  )
}

export default Parent