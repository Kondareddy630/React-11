import React, { useState } from 'react'

function Listrender() {


    const[technologies,setTechlogogies]=useState(["html","css","react","node js"]);
    const[genders,setGenders]=useState(["male","female","other"]);

    const[student,setStudent]=useState({
        id:101,
        name:"Pooja",
        course:"Java full Stack",
        fees:15000,
        photo:"/images/student.jfif",
        phone:445566
    });


const[students,setStudents]=useState([

    {sid:101,name:"a",course:"java",fees:1000,photo:"/images/poojitha.jpg"},
    {sid:102,name:"b",course:"ui",fees:9000,photo:"/images/sahasra.jpg"},
    {sid:103,name:"c",course:"python",fees:5000,photo:"/images/surya.jpg"},
    {sid:104,name:"d",course:"ui",fees:9000,photo:"/images/anu.jpg"},
    {sid:105,name:"e",course:"java",fees:7000,photo:"/images/hanvika.jpg"}

])


const[technologies1,setTechlogogies1]=useState([

    {module:"Frontend",technologies:["html","css","js"]},
    {module:"Backend",technologies:["java","spring","adv java"]},
    {module:"Database",technologies:["oracle","mysql","sqlserver"]},


]);


const[names,setNames]=useState([

    {name:"Raju",technologies:["java","python"]},
    {name:"Sahasra",technologies:["c","java","ms-office"]},
    {name:"Anu",technologies:["nodejs","expressjs","mongodb"]}

])



  return (
    <div>
        <div>
            {
                names.map((t)=>
                    <div>
                        <h2>{t.name}</h2>
                        <div>
                            {
                                t.technologies.map((t)=><p>{t}</p>)
                            }
                        </div>
                    </div>
                    
                )
            }
        </div>

        <ol>
            {
                technologies1.map((tech)=>
                    <li>{tech.module}

                    <ul>
                        {
                            tech.technologies.map((t)=><li>{t}</li>)
                        }
                    </ul>
                    
                    </li>
                )
            }
        </ol>

        <div className='row'>

            {
                students.map((s)=>
                    <div className='col-lg-3'>

                        <div className='card shadow-lg mt-2'>
                            <img src={s.photo} height={200} className='card-img-top'/>
                            <div className='card-body'>
                                <dt>Name:</dt>
                                <dd className='text-capitalize'>{s.name}</dd>

                                <dt>Course</dt>
                                <dd>{s.course}</dd>

                                <dt>Fees</dt>
                                <dd>{s.fees}</dd>

                               
                               <button className='btn btn-primary w-100'>See More</button>


                            </div>
                        </div>
                    
                    </div>
                )
            }
            
        </div>


        <table className='table table-bordered shadow table-striped'>

            <thead className='table-dark'>
                <tr>
                    {
                        ["sid","name","course","fees"].map((h)=><td className='text-capitalize'>{h}</td>)
                    }
                </tr>

            </thead>

            <tbody>
                {
                    students.map((student)=>
                        <tr>
                            <td>{student.sid}</td>
                            <td>{student.name}</td>
                            <td>{student.course}</td>
                            <td>{student.fees}</td>
                        </tr>
                    )
                }

            </tbody>

        </table>


        <div className='card w-25 shadow mt-auto'>
            <img src={student.photo} className='card-img-top'/>
            <div className='card-body'>
                <h3>{student.name}</h3>
                <p>{student.course}</p>
                <p>{student.fees}</p>
                <p>{student.phone}</p>

                <button className='btn btn-primary w-100'>Add Student</button>

            </div>

        </div>

        <ol>
            {
                technologies.map((tech,index)=><li key={index}>{tech}</li>)


            }

        </ol>

        <div>
            {
                technologies.map((tech,index)=><p key={index}>{tech}</p>)
            }
        </div>

  <select>
    {
        technologies.map((tech)=><option>{tech}</option>)
    }
  </select>

<form>
    {
        genders.map((gender)=>
           <div>
             <input type='radio' value={gender} name="gender" className=' my-2'/>
            <label>{gender}</label>
           </div>
        )
    }
</form>


    </div>
  )
}

export default Listrender