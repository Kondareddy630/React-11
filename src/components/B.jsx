import React, { useContext } from 'react'
import C from './C'
import { mycontext } from '../App'

function B(props) {


   let name =useContext(mycontext);

  return (
    <div>B

<p>{name}</p>
{
    JSON.stringify(props.myemp)
}
        <C employee={props.myemp}></C>
    </div>
  )
}

export default B