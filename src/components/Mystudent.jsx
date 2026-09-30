import React from 'react'

function Mystudent({myStudents}) {


  return (
    <div>

        <table className='table table-bordered table-striped shadow'>

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
            </thead>

            <tbody>
                {
                    myStudents.map((s)=>
                    <tr>
                      <td>{s.sid}</td>
                      <td>{s.name}</td>
                    </tr>)
                }
            </tbody>


        </table>

    </div>
  )
}

export default Mystudent