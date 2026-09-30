import React, { useContext } from 'react'
import { mycontext } from '../App'

function C({employee}) {


    let uname=useContext(mycontext);

  return (
    <div>
        <p>{uname}</p>
        C
        {
            JSON.stringify(employee)
        }

        <p>{employee.empno},{employee.name}</p>
    </div>
  )
}

export default C