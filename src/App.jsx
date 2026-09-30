import React, { useState } from 'react'
import Listrender from './components/Listrender'
import Emp from './components/Emp'
import Student from './components/Student'
import Card from './Card'
import Dept from './components/Dept'
import Mystudent from './components/Mystudent'
import Cards from './components/Cards'
import Parent from './Parent'
import Userapp from './components/Userapp'

function App() {


  const[emp,setEmp]=useState({
    empno:101,
    name:"hello",
    job:"maanger",
    salary:50000
  })


 const[product,setProduct] =useState({
    img:"/images/pizz4.jpg",
    title:"Veg Pizza",
    price:500,
    rating:"5.0"
  })


  const[dept,setDept]=useState({
    deptno:101,
    name:"sales",
    loc:"hyd"
  })


  const[students,setStudents]=useState([

    {sid:101,name:"a"},
    {sid:102,name:"b"},
    {sid:103,name:"c"},
    {sid:104,name:"d"}


  ]);
    


  return (
    <div className='container mt-5'>


{/* 
<Emp employee={emp}></Emp>

<Student id={101} name="hello" course="java" ispaid={true}></Student>

<Card myproductdata={product} ></Card>

<Dept mydept={dept}></Dept>

<Mystudent myStudents={students}></Mystudent> */}

{/* <Cards></Cards> */}

{/* <Parent></Parent> */}

<Userapp></Userapp>


    </div>
  )
}

export default App