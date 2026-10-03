import React, { useState } from 'react'

function Style() {

const[hello,setHello]=useState({
    color:"blue",
    textAlign:"center",
    boxShadow:"4px 4px 4px black",
    backgroundColor:"lightgreen",
    borderRadius:"20px",
    padding:"20px"
})


return (
<div>

<p className="text-uppercase text-green text-center">good morning</p>

<h1 style={ {color:"red",textAlign:"center",textShadow:"2px 2px 2px blue",fontSize:"50px",backgroundColor:"pink",padding:"20px"} }>Java Full Stack</h1>

<h1 style={hello}>Python Fulll Stack</h1>


</div>
)
}

export default Style