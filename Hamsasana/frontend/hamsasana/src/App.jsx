import React from 'react'
import Home from '../src/pages/home.jsx'
import Courses from '../src/pages/courses.jsx'

import { Navigate, Route,Routes } from 'react-router-dom'
import Signup from './components/signupstudent.jsx'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/authprovider.jsx'
import Contactus from './pages/contactus.jsx'
import Aboutus from './pages/aboutus.jsx'

function App() {
  const [authUser,setAuthUser]=useAuth()
    console.log(authUser)
  return (
    <>

   {/* <Home/>
    <Course/>*/}
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Course" element={authUser?<Courses/>:<Navigate to="/Signup"/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Contact" element={<Contactus/>} />
      <Route path="/About" element={<Aboutus/>} />
      

    

    </Routes>
    <Toaster/>
    </div>

    
  
    

    </>
    
  )
}

export default App
