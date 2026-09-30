import React, { useContext } from 'react'
import B from './B'
import { mycontext } from '../App'

function A(props) {


   let uname =useContext(mycontext);

  return (
    <div>A

        <h2>Hello !! {uname}</h2>

{
    JSON.stringify(props.myemp)
}

        <B myemp={props.myemp}></B>


    </div>
  )
}

export default A