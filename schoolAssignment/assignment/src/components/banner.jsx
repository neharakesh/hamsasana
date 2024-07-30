import React, { useEffect, useRef } from 'react'
import tech from '../../public/images/tech.jpg'
import { Link } from 'react-router-dom'

import Lottie from 'lottie-react'
import aos from "aos"
import loti3 from '../../public/images/loti3.json'

import 'aos/dist/aos.css'
import { Autoplay } from 'swiper/modules'


function Banner() {
   
    useEffect(()=>{
        aos.init({duration:1000})
    },[])
    return (
        <>
        <div className=''>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex md:mt-4 flex-col md:flex-row bg-white mt-10 mb-10 dark:bg-slate-900 dark:text-white'>
                <div className='w-full  md:w-1/2 md:mt-32 mt-12 justify-center grid grid-flow-col'>
                    <div className='space-y-12 '>
                    <h1 className='text-4xl font-bold' data-aos="fade-up" >Hello,Welcome here to learn something <span className='text-orange-500'>new everyday!!!</span></h1>
                    
                    <p className='text-xl' data-aos="fade-up" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit architecto molestiae exercitationem modi doloremque. Odit fugiat voluptatibus numquam ducimus esse quod voluptatem libero eveniet aliquam saepe quibusdam commodi, accusamus nostrum!
                        
                    </p>
                    
                    <Link to="/Signup" className="btn btn-active btn-secondary bg-orange-500 text-white hover:bg-red-600 hover:scale-105 duration-300" data-aos="fade-right">Get Started</Link></div>
                   
                    
                    
                    
                    </div>
                    <div className='w-full  md:w-1/2 md:mt-32 mt-12 justify-center grid grid-flow-col'>
                        <img className='w-25 align-super' data-aos="zoom-in" src={tech} alt="" />
                    </div>
                
                
                
            </div>



            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  flex flex-col md:flex-row bg-white  mb-20 dark:bg-slate-900 dark:text-white'>
            <div className='w-full  md:w-1/2 md:mt-32 mt-12 justify-center grid grid-flow-col'>
                 <Lottie data-aos="zoom-in" loop={true} autoplay={true} animationData={loti3} />
                    </div>

                <div className='w-full  md:w-1/2 md:mt-32 mt-2 justify-center grid grid-flow-col'>
                    <div className='space-y-12 '>
                    <h1 className='text-4xl font-bold' data-aos="fade-up" > <span className='text-orange-500'>Bharat’s Biggest & Most Trusted</span> Educational Platform</h1>
                    
                    <p className='text-xl' data-aos="fade-up" >Unlock your potential by signing up with Physics Wallah-The most affordable learning solution
                        
                    </p>
                {/*
                    <div className='w-64 mx-48'>
                    <Lottie data-aos="zoom-in" loop={true} autoplay={true} animationData={loti5} />
                    </div>
                    */}
                    </div>
                
                    
                    
                    </div>
                     
                 
                
                
            </div>
            </div>
            
        </>
        
    )
}

export default Banner
