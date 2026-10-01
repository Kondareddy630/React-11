import React, { useState } from 'react'
import Usertable from './Usertable'
import Usercard from './Usercard'

function Userapp() {

const[state,setState]=useState({});


    function receiveData(user)
    {
setState(user)
    }

  return (
    <div>

<pre>
    {
        JSON.stringify(state)
    }
</pre>
        <h2>List of Users</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a repellat impedit et unde aspernatur qui nobis aliquam, expedita at! Harum dolorum asperiores possimus in totam et, neque perspiciatis veritatis rem quibusdam quisquam. Suscipit, animi ducimus! Qui, maxime tenetur praesentium neque, ducimus voluptates molestiae impedit vel suscipit similique animi perspiciatis?</p>

        <div className='row'>

            <div className='col-lg-9'>
                <Usertable senduser={receiveData}></Usertable>
            </div>

            <div className='col-lg-3'>
                <Usercard userdata={state}></Usercard>
            </div>

        </div>


    </div>
  )
}

export default Userapp