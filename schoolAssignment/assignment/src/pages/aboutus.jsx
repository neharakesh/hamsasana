import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import About from '../components/about.jsx'
function Aboutus() {
    return (
        <div className='bg-slate-100 dark:bg-slate-900 '>
        <Navbar/>
        <div className='min-h-screen'>
        <About/>
        </div>
        
        <Footer/>
        </div>
        
    )
}

export default Aboutus
