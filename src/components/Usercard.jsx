import React from 'react';

function Usercard(props) {

  return (
    <div>

      {
        props.userdata ? (

          <div className="card w-100 shadow">

            <div className="card-header text-center">
              <img
                src={props.userdata.picture?.medium}
                className="rounded-circle"
                style={{ marginTop: "-50px" }}
                alt="User"
              />
            </div>

            <div className="card-body">

              <h5 className="text-center">
                {props.userdata.name?.first} {props.userdata.name?.last}
              </h5>

              <ul className="list-group">

                <li className="list-group-item text-capitalize">
                  {props.userdata.gender}
                </li>

                <li className="list-group-item">
                  {props.userdata.email}
                </li>

                <li className="list-group-item">
                  {props.userdata.location?.city}
                </li>

                <li className="list-group-item">
                  {props.userdata.location?.country}
                </li>

              </ul>

            </div>

          </div>

        ) : (

          <div className="card shadow">
            <div className="card-body text-center">
              <h5>Select a user</h5>
              <p>Click a user from the table.</p>
            </div>
          </div>

        )
      }

    </div>
  );
}

export default Usercard;