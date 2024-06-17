import React from 'react'
import Footer from '../components/footer.jsx'
import Navbar from '../components/navbar.jsx'
import Course from '../components/course.jsx'


function Courses() {
    
    return (
        <>
        <div className=' bg-white dark:bg-slate-900 dark:text-white'>
        <Navbar/>
        <div className='min-h-screen'>
        <Course/>
        </div>
        
        <Footer/>
        </div>
        </>
    )
}

export default Courses
