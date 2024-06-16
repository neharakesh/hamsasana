import React from 'react'
import Home from '../src/pages/home.jsx'
import Course from '../src/components/course.jsx'
import { Route,Routes } from 'react-router-dom'
function App() {
  return (
    <>

   {/* <Home/>
    <Course/>*/}

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Course" element={<Course/>} />
    </Routes>

    
  
    

    </>
    
  )
}

export default App
