import React from 'react'
import Contact from '../components/contact'
import Footer from '../components/footer.jsx'
import Navbar from '../components/navbar.jsx'

function Contactus() {
    return (
        <>
        <div className='bg-slate-100 dark:bg-slate-900 '>
        <Navbar/>
        <div className='min-h-screen'>
        <Contact/>
        </div>
        
        <Footer/>
        </div>
        </>
    )
}

export default Contactus
