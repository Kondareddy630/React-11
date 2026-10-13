import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Course() {
  return (
    <div>
        

        <br/>
        <br/>

        <div className='row'>

          <div className='col-lg-3'>

            <Link to="java" className='btn btn-danger w-100 d-block'>Java</Link>
            <Link to="python" className='btn btn-primary w-100 my-2 d-block'>Python</Link>
           

          </div>


          <div className='col-lg-9'>
            <Outlet></Outlet>
          </div>

        </div>


    </div>
  )
}

export default Course