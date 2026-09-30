import React, { useState } from 'react'

function Emp(props) {




  return (
    <div>Emp

        <dt>Empno</dt>
        <dd>{props.employee.empno}</dd>
        
        <dt>Name</dt>
        <dd>{props.employee.name}</dd>

        
        <dt>Job</dt>
        <dd>{props.employee.job}</dd>

        
        <dt>Salary</dt>
        <dd>{props.employee.salary}</dd>

        


    </div>
  )
}

export default Emp