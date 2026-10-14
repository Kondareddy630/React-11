import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

  const[login,setLogin]=useState({
    username:"",
    password:"",

  });

  const navigate=useNavigate();

    
function handleUsername(e)
{

  setLogin({
  ...login,
    username:e.target.value,
  
  })

}


function handlePassword(e)
{

  setLogin({
  ...login,
    password:e.target.value,

  })

}

function handleSubmit(e)
{

  e.preventDefault();

  if(login.username==="sssit" && login.password==="abcd1234")
  {
    localStorage.setItem("username",login.username);
    navigate("/dashboard");

  }

  else{
    navigate("/error");
  }


}

  return (
    <div className='container mt-5'>

      <form className='border border-1 rounded shadow w-50 m-auto p-4' onSubmit={handleSubmit}>
        <div>
          <h3 className='text-muted'>Login Here</h3>
        </div>

        <div className='my-3'>
          <input type='text' placeholder='Username' className='form-control form-control-lg' value={login.username} onChange={handleUsername}/>
        </div>

        <div className='my-2'>
          <input type='password' placeholder='Password' className='form-control form-control-lg' value={login.password} onChange={handlePassword}/>
        </div>

        <div className='my-2'>
          <input type='submit' value="Login" className='w-100 btn btn-success' />
        </div>

      </form>





    </div>
  )
}

export default Login