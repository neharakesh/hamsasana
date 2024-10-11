import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Academicsection from '../components/academicsection'
function Academic() {
    return (
        <>
    <div className='bg-white dark:bg-slate-900 '>
    <Navbar />
    <Academicsection/>
    <Footer/>
    </div>
    </>
    )
}

export default Academic