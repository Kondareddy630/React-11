import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {


  return (
    <div>

        <nav className='bg-danger text-white p-4'>

           <Link to="/" className='text-decoration-none text-white mx-2'>Home</Link>
           <Link to="/about" className='text-decoration-none text-white mx-2'>About</Link>
           <Link to="/course" className='text-decoration-none text-white mx-2'>Course</Link>

           <NavLink to="/contact" className='text-decoration-none  mx-2' style={({isActive})=>({color:isActive?"gold":"white",border:isActive?"1px solid white":"none",padding:"10px"})}>Contact</NavLink>

           <NavLink to="/dashboard" className='text-decoration-none  mx-2' style={({isActive})=>({color:isActive?"gold":"white",border:isActive?"1px solid white":"none",padding:"10px"})}>Dashboard</NavLink>

        </nav>


    </div>
  )
}

export default Navbar