import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Cond1() {

    const[state,setState]=useState([]);


    useEffect(()=>{

        axios.get("https://fakestoreapi.com/products")
        .then((res)=>setState(res.data))
        .catch((error)=>console.log(error));
    },[])


    const[status,setStatus]=useState(false);

    const[students,setStudents]=useState([

        {sid:101,name:"a",course:"java",fees:1000},
        {sid:102,name:"b",course:"python",fees:9000},
        {sid:103,name:"c",course:"ui",fees:15000},
        {sid:104,name:"d",course:"react",fees:0}

    ]);



  return (
    <div className='container mt-5'>

        <div className='m-4'>
            {
                state.length==0?<div> <span className='spinner-border spinner-border-sm text-primary'></span> <span>Please wait loading....</span>  </div> :
                <div className='d-flex flex-wrap'>
                   {
                    state.map((p)=>
                    <div className='card shadow m-2' style={{width:"300px"}}>
                        <img src={p.image} style={{height:"150px",objectFit:"contain"}}/>
                        <div className='card-body'>
                            <dt>Title</dt>
                            <dd>{p.title}</dd>
                        </div>
                    </div>
                    )
                   }
                </div>

            }
        </div>

        <table className='table table-bordered shadow table-striped'>

            <thead>
                <tr>
                    {
                        Object.keys(students[0]).map((h)=><th className='text-capitalize'>{h}</th>)
                    }
                </tr>
            </thead>

            <tbody>
                {
                    students.map((s)=>
                        <tr>
                            <td>{s.sid}</td>
                            <td>{s.name}</td>
                            <td>{s.course}</td>
                            <td>

                                {
                                    s.fees>=15000 &&<span className='text-success'>No due</span>
                                }

                                {
                                    s.fees>=500   && s.fees<15000 && <span className='text-warning'>Due</span>
                                }

                                {
                                    s.fees==0 && <span className='text-danger'>Not Paid</span>
                                }


                            </td>
                        </tr>
                    )
                }
            </tbody>

        </table>

      


        <div>
            {
                (status)?<h2>Good Morning</h2>:<h2>Good Night</h2>
            }
        </div>


        <button className='btn btn-dark' onClick={()=>setStatus(!status)}>Click</button>



    </div>
  )
}

export default Cond1