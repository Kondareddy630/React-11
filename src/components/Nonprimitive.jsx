import React, { useState } from 'react'

/*

List rendering:
--------------
List rendering is concept of read the data from array,
present that data on ui diff ways like ordered list,unordered list,dropdown,
checkboxs .......

*/
function Nonprimitive() {


  const[technologies,setTechnogies]=useState(["html","css","js","react","angular","java","python","node js","express js"]);


  const[numbers,setNumbers]=useState([1,2,3,4,5,6,7,8,9,10]);

  const[names,setNames]=useState(["ravi","anu","sahasra","hanvika","jyothi"]);


  const[students,setStudents]=useState(["ravi","anu","sahasra","hanvika","jyothi"]);
  const[scores,setScores]=useState([50,96,10,85,100]);


  const[product,setProduct]=useState({

    img:"/images/pizz4.jpg",
    title:"Veg Pizza",
    price:"100",
    rating:"4.5"


  });


  const[movies,setMovies]=useState([

    {
      img:"https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/34756_B55Ipnh3.jpg",
      title:"THE PARADISE",
      language:"Telugu",
      rating:4.5
    },
    {
      img:"https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/38222_VEvQY20C.jpg",
      title:"HANUMAN ANSH",
      language:"Hindi",
      rating:"4.8"
    }
    ,{
      img:"https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/35275_r70hb5oC.jpg",
      title:"THE VVAAN",
      language:"Hindi",
      rating:"4.0"
    },
    {
      img:"https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/36500_1zTvtfKk.jpg",
      title:"MIRZAPUR : THE MOVIE",
      language:"English",
      rating:"3.0",
    }

  ])







  return (
    <div className='container mt-5'>

      <h2>List of Movies</h2>

      <div className='row'>
        {
          movies.map((movie)=>
            <div className='col-lg-3'>

              <div className='card shadow-lg'>
                <img src={movie.img} height={250} className='card-img-top'/>
                <div className='card-body'>
                   <h5>{movie.title}</h5>
                   <p>{movie.language}</p>
                </div>
              </div>
          
            </div>
          )
        }

      </div>




  



      <h2>List of Technologies</h2>

      <div className='card shadow w-25 m-auto'>
        <img src={product.img} className='card-img-top'/>

        <div className='card-body'>
          <dt>Title</dt>
          <dd>{product.title}</dd>

          <dt>Price</dt>
          <dd>&#8377;{product.price}</dd>

          <dt>Rating</dt>
          <dd className='badge bg-success'>{product.rating}</dd>

          <button className='btn btn-dark d-block'>Add To Cart</button>


        </div>

      </div>

      <table className='table table-bordered shadow table-striped'>

        <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
        </thead>

        <tbody>
          {
            students.map((name,index)=>
              <tr>
                <td>{name}</td>
                <td>{scores[index]}</td>
              </tr>
            )
          }

        </tbody>

      </table>



      <ul>
        {
          names.filter((name)=>name.length>=5).map((n)=><li>{n}</li>)
        }

      </ul>

      <ol>
        {
          numbers.filter((num)=>num%2==0).map((even)=><li>{even}</li>)
        }

      </ol>

      <ol>
        {
          technologies.map((tech)=><li>{tech}</li>)
        }

      </ol>


      <ul>
        {
          technologies.map((tech)=><li>{tech}</li>)
        }
      </ul>
      <select>
        {
          technologies.map((tech)=><option>{tech}</option>)
        }
      </select>

      <div>
        {
          technologies.map((tech)=>
            <div className='form-check'>
              <input type='checkbox' name="course" value={tech} className='form-check-input'/>
              <label>{tech}</label>
            </div>
          )
        }
      </div>



    </div>
  )
}

export default Nonprimitive