import React from 'react'

function Usercard(props) {


  return (
    <div className='card w-100 shadow'>

        <div className='card-header text-center'>
          <img src={props.userdata.picture?.medium} className='rounded-circle' style={{marginTop:"-50px"}}/>
        </div>

        <div className='card-body'>
          <ul className='list-group'>
            <li className='text-capitalize list-group-item'>{props.userdata.gender}</li>
             <li className='text-capitalize list-group-item'>{props.userdata.email}</li>
          </ul>

        </div>
      
    
    </div>
  )
}

export default Usercard