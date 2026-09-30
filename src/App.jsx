import React, { createContext, useState } from 'react'
import A from './components/A'
import Hello from './components/Hello';

export const mycontext=createContext();// memory


function App() {

  const[emp,setEmp]=useState({
    empno:101,
    name:"hello",
    job:"manager",
    sal:5000
  })


  const[username,setUsername]=useState("Kondareddy");

  return (
    <div className='container mt-5'>App

    <pre>
      {
        JSON.stringify(emp)
      }
    </pre>



    <mycontext.Provider value={username}>
         <A myemp={emp}></A>
    </mycontext.Provider>


<Hello>
   <h2>Heading</h2>
   <p>para</p>
  <a href=''>Facebook</a>
</Hello>



    </div>
  )
}

export default App