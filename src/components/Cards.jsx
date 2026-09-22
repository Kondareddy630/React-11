import React from 'react'
import Card from './Card'

function Cards() {


  return (
    <div className='container mt-5'>

        <div className='row'>

            <div className='col-lg-4'>
                <Card></Card>
            </div>

            <div className='col-lg-4'>
                 <Card></Card>
            </div>

            <div className='col-lg-4'>
                 <Card></Card>
            </div>



        </div>



        
    </div>
  )
}

export default Cards