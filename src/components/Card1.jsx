import React from 'react'

function Card1({img,title,rating,rate}) {


  return (
    <div className='card mt-2 p-3'>
        <img src={img} height="200px"  style={{objectFit:"contain"}}/>

    </div>
  )
}

export default Card1