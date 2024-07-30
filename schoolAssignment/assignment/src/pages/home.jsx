import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Crausel from '../components/crausel'
import Footer from '../components/footer'
import Hometu from '../components/hometu'

function Home() {
    return (
        <>
    <div className='bg-white dark:bg-slate-900 '>
    <Navbar />
    <Crausel/>
    <Banner/>
    <Hometu/>
    <Footer/>
    </div>
    </>
    )
}

export default Home
