import React, { useState } from 'react'

/*

List rendering:
--------------
List rendering is concept of read the data from array,
present that data on ui diff ways like ordered list,unordered list,dropdown,
checkboxs .......

*/
function Nonprimitive() {


  const[technologies,setTechnogies]=useState(["html","css","js","react","angular","java","python","node js","express js"]);





  return (
    <div className='container mt-5'>

      <h2>List of Technologies</h2>

      <ol>
        {
          technologies.map((tech)=><li>{tech}</li>)
        }

      </ol>


      <ul>
        {
          technologies.map((tech)=><li>{tech}</li>)
        }
      </ul>
      <select>
        {
          technologies.map((tech)=><option>{tech}</option>)
        }
      </select>

      <div>
        {
          technologies.map((tech)=>
            <div className='form-check'>
              <input type='checkbox' name="course" value={tech} className='form-check-input'/>
              <label>{tech}</label>
            </div>
          )
        }
      </div>



    </div>
  )
}

export default Nonprimitive