import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Axios() {

const[state,setState]=useState([]);


function loadProducts()
{
     axios.get("https://fakestoreapi.com/products")
    .then((res)=>setState(res.data))
    .catch((error)=>console.log(error))
}


useEffect(()=>{

    loadProducts();
   

},[]);





  return (
    <div>

        <h2>List of Prodcuts</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nulla doloribus tenetur itaque, temporibus obcaecati harum minus fuga dolore. Explicabo omnis doloribus, ea nemo fuga deserunt cumque aut asperiores pariatur.</p>

<div className='row'>
    {
        state.map((p)=>
            <div className='col-lg-3'>

                <div className='card shadow mt-2 p-2'>
                    <img src={p.image} height={200}/>
                    <div className='card-header'>
                        <h5 className='text-capitalize'>{p.category}</h5>
                    </div>

                    <div className='card-body'>
                        <h4 className='text-truncate'>{p.title}</h4>
                    </div>
                </div>

            </div>
        )
    }

</div>




       
    </div>
  )
}

export default Axios