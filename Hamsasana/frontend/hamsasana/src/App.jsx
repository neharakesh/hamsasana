import React from 'react'
import Home from '../src/pages/home.jsx'
import Courses from '../src/pages/courses.jsx'
import { Route,Routes } from 'react-router-dom'
import Signup from './components/signup.jsx'

function App() {
  return (
    <>

   {/* <Home/>
    <Course/>*/}
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Course" element={<Courses/>} />
      <Route path="/Signup" element={<Signup/>} />
    

    </Routes>
    </div>

    
  
    

    </>
    
  )
}

export default App
