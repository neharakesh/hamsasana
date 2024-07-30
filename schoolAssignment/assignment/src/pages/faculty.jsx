import React from 'react'
import Navbar from '../components/navbar'
import Facultyinfo from '../components/facultyinfo'
import Footer from '../components/footer'


function Faculty() {
    return (
        <>
    <div className='bg-white dark:bg-slate-900 '>
    <Navbar />
    <Facultyinfo/>
    <Footer/>
    </div>
    </>
    )
}

export default Faculty