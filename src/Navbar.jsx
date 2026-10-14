import React from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'

function Navbar() {

    let username=localStorage.getItem("username");

    const naviagte=useNavigate();

    function handleLogout()
    {
        localStorage.removeItem("username");
       return  naviagte("/login");
    }

  return (
    <div>
        <nav className='bg-danger text-white p-3'>

        <NavLink to="/" className="text-decoration-none text-white mx-2">Home</NavLink>
        <NavLink to="/about" className="text-decoration-none text-white mx-2">About</NavLink>
        <NavLink to="/login" className="text-decoration-none text-white mx-2">Login</NavLink>

        {
          (username) && (<NavLink className=" btn btn-primary text-decoration-none text-white mx-2">Dashboard</NavLink>)
        }

        {
          (username) && (<button className='btn btn-warning' onClick={handleLogout}>Logout</button>)
        }

      </nav>
    </div>
  )
}

export default Navbar