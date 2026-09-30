import React from 'react'

function Student(props) {

  console.log(props);

  return (

    <div>Student

      <p>{props.id}</p>
            <p>{props.name}</p>
                  <p>{props.course}</p>
                  <p>
                  {
                    props.ispaid?"fees paid":"Due"
                  }
                  </p>

    </div>
  )
}

export default Student