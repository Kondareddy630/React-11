import React, { useState } from 'react'

function Counter() {


    const[count,setCount]=useState(0);

    const[message,setMessge]=useState("hello");

    function sayIncrement()
    {
        setCount(count+1);
    }

    function sayDecrement(){
        setCount(count>1?count-1:1);
    }

    function sayHtml(){
        setMessge("Html stands for hypertext markup language");
    }

    function sayJs(msg){
        setMessge(msg);
    }
  return (
    <div>

    
  

        <pre>
            {
                JSON.stringify(count)
            }
        </pre>

        <h1>{count}</h1>
        <h1>{message}</h1>

<button className='btn btn-primary m-1' onClick={sayHtml}>Html</button>


<button className='btn btn-secondary m-1' onClick={()=>setMessge("Cascdaing style sheet")}>Css</button>


<button className='btn btn-warning m-1' onClick={()=>sayJs("It is used add the functionality to the webpage")}>Js</button>


        <button className='btn btn-danger m-1' onClick={sayIncrement}>Increment</button>
        <button className='btn btn-success m-1' onClick={sayDecrement}>Decrement</button>


    </div>
  )
}

export default Counter