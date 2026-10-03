import React, { useState } from 'react';
import Usertable from './Usertable';
import Usercard from './Usercard';

function Userapp() {

  const [state, setState] = useState(null);

  function receiveData(user) {
    setState(user);
  }

  return (
    <div>

      <h2>List of Users</h2>

      <div className="row">

        <div className="col-lg-9">
          <Usertable senduser={receiveData} />
        </div>

        <div className="col-lg-3">
          <Usercard userdata={state} />
        </div>

      </div>

    </div>
  );
}

export default Userapp;