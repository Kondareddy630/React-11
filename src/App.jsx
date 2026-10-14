import React from 'react'
import { BrowserRouter,Routes,Route, NavLink, Navigate } from 'react-router-dom'
import Home from './components/routing/Home'
import About from './components/routing/About'
import Login from './components/routing/Login'
import Protect from './components/routing/Protect'
import Dashboard from './components/routing/Dashboard'
import Error from './components/routing/Error'
import Navbar from './Navbar'

function App() {

  
  




  return (
    <div className='container mt-5'>

      <BrowserRouter>

      <Navbar></Navbar>

      


      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/about' element={<About></About>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>

         <Route path="/dashboard" element={
          <Protect>
             <Dashboard></Dashboard>
          </Protect>

         }></Route>


         <Route path="/error" element={<Error></Error>}></Route>

         <Route path="*" element={<code>Page Not Found</code>}></Route>

      </Routes>
      
      </BrowserRouter>

     




    </div>
  )
}

export default App