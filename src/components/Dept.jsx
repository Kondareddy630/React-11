import React from 'react'

function Dept({mydept}) {


  return (
    <div>
        {mydept.deptno}
        {mydept.name}
        {mydept.loc}
    </div>
  )
}

export default Dept