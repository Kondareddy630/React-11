import React from 'react'
import { Link } from 'react-router-dom'

function Error() {

    
  return (
    <div>
      <code className='fs-3'>Invalid Username or Password</code>
      <Link to="/login" className='btn btn-success d-block w-25'>Login</Link>
    </div>
  )
}

export default Error