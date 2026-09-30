import React from 'react'

function Hello(props) {

    console.log(props.children);


  return (
    <div>Hello

        <h2>{props.children[0]}</h2>
        <h2>{props.children[1]}</h2>
      
    </div>
  )
}

export default Hello