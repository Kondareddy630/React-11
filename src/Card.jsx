import React from 'react'

function Card({img,title,price,rating}) {

    
  return (
    <div className='card shadow mt-2 p-2'>
      <img src={img} height={200}/>
      <div className='card-body'>
        <h6>{title}</h6>
        <h3>{price}</h3>
        <span className='badge bg-success'>{rating}</span>

      </div>
 
    </div>
  )
}

export default Card