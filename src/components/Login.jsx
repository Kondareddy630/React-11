import React, { use, useState } from 'react'

function Login() {

    const[city,setCity]=useState("");


    const[login,setLogin]=useState({
        username:"",
        password:"",
    })

    function handleUserName(e){

        setLogin({
            ...login,
            username:e.target.value,
           

        })

    }

    function handlePassword(e){

        setLogin({
           ...login,
           password:e.target.value
        })

    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(login);
    }

  return (
    <div>

<pre>
    {JSON.stringify(city)}
</pre>

        <select value={city} onChange={(e)=>setCity(e.target.value)}>
            <option>hyd</option>
            <option>pune</option>
            <option>delhi</option>
        </select>

        <p>You selected {city}</p>

        <pre>
            {
                JSON.stringify(login)
            }
        </pre>


        <form onSubmit={handleSubmit} className='border shadow rounded-2 m-auto p-4' style={{width:"400px"}}>

            <div className='mt-2'>
                <h3 className='text-muted'>Login Here</h3>
            </div>


            <div className='mt-3'>
               <input type='text' placeholder='Username' className='form-control form-control-lg' value={login.username} onChange={handleUserName}/>
            </div>

             <div className='mt-3'>
               <input type='password' placeholder='Password' className='form-control form-control-lg' value={login.password} onChange={handlePassword}/>
            </div>

             <div className='mt-3'>
               <input type="submit" value="Login" className='btn btn-primary w-100'/>
            </div>



        </form>




    </div>
  )
}

export default Login