import React from 'react'
import Userapp from './components/Userapp'
import Axios from './components/Axios'
import Style from './components/Style'
import Counter from './components/Counter'
import Change from './components/Change'
import Login from './components/Login'
import Search from './components/Search'
import Mouse from './components/Mouse'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/routing/Home'
import About from './components/routing/About'
import Course from './components/routing/Course'
import Contact from './components/routing/Contact'
import Navbar from './components/routing/Navbar'
import Java from './components/routing/Java'
import Python from './components/routing/Python'
import Selectcourse from './components/routing/Selectcourse'

function App() {


  return (
    <div className='container mt-5'>


      
      
      <BrowserRouter>

       <Navbar></Navbar>


        <Routes>

          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>


          <Route path="/course" element={<Course></Course>}>

          <Route index element={<Selectcourse></Selectcourse>}></Route>
          <Route path="java" element={<Java></Java>}></Route>
           <Route path="python" element={<Python></Python>}></Route>
                  
          </Route>



          <Route path="/contact" element={<Contact></Contact>}></Route>


          <Route path="*" element={<h3 className='text-danger'>Page Not Found</h3>}></Route>
      
          
        </Routes>
        
      </BrowserRouter>




    </div>
  )
}

export default App