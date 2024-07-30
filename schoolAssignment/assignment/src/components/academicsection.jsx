import React, { useEffect, useRef } from 'react'
import er1 from '../../public/images/er1.jpg'

import { Link } from 'react-router-dom'
import Slider from "react-slick";
import Cards from './cards';

import Lottie from 'lottie-react'
import aos from "aos"
import loti3 from '../../public/images/loti3.json'

import 'aos/dist/aos.css'
import { Autoplay } from 'swiper/modules'
import Swiperslider from './swiperslider.jsx';

function Academicsection() {


    useEffect(()=>{
        aos.init({duration:1000})
    },[])

    return (
        <>
        <div className=''>
            <div>
                <h1 className='text-4xl text-orange-500  text-bold flex justify-center mt-4 font-bold underline'>
                    Crriculum Activities
                </h1>
            </div>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex md:mt-4 flex-col md:flex-row bg-white mt-0 mb-10 dark:bg-slate-900 dark:text-white'>
                <div className='w-full  md:w-1/2 md:mt-10 mt-4 justify-center grid grid-flow-col'>
                    <div className='space-y-5 '>
                    <h1 className='text-4xl font-bold' data-aos="fade-up" >Primary :<span className='text-orange-500'>Grades 1-5!!!</span></h1>
                    <h2 className='text-2xl  font-bold md:justify-center'data-aos="fade-up" >Subjects:</h2>
                    <p className='text-xl' data-aos="fade-up" > English, Mathematics, Science, Social Studies, Art, Physical Education </p>
                    <p className='text-xl' data-aos="fade-up" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veritatis unde incidunt beatae sunt, vero iure aliquid corrupti officia id sapiente animi quam eaque autem. Iusto consectetur quia quaerat dolor!

                        
                    </p>
                    
                    </div>
                   
                    
                    
                    
                    </div>
                    <div className='w-full  md:w-1/2 md:mt-10 mt-4 justify-center grid grid-flow-col'>
                        <img className='w-15 align-super' data-aos="zoom-in" src={er1} alt="" />
                    </div>
                
                
                
            </div>


            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex md:mt-4 flex-col md:flex-row bg-white mt-0 mb-10 dark:bg-slate-900 dark:text-white'>
            <div className='w-full  md:w-1/2 md:mt-10 mt-4 justify-center grid grid-flow-col'>
                        <img className='w-25 align-super' data-aos="zoom-in" src={er1} alt="" />
                    </div>
                <div className='w-full  md:w-1/2 md:mt-10 mt-4 justify-center grid grid-flow-col'>
                    <div className='space-y-5 '>
                    <h1 className='text-4xl font-bold' data-aos="fade-up" >Secondary<span className='text-orange-500'>Grades 6-10!!!</span></h1>
                    <h2 className='text-2xl  font-bold md:justify-center'data-aos="fade-up" >Subjects:</h2>
                    <p className='text-xl' data-aos="fade-up" > English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art
                    </p>
                    <p className='text-xl' data-aos="fade-up" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veritatis unde incidunt beatae sunt, vero iure aliquid corrupti officia id sapiente animi quam eaque autem. Iusto consectetur quia quaerat dolor!

                        
                    </p>
                    
                    </div>
                   
                    
                    
                    
                    </div>
                   
                
                
                
            </div>


            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex md:mt-4 flex-col md:flex-row bg-white mt-0 mb-10 dark:bg-slate-900 dark:text-white'>
                <div className='w-full  md:w-1/2 md:mt-10 mt-4 justify-center grid grid-flow-col'>
                    <div className='space-y-5 '>
                    <h1 className='text-4xl font-bold' data-aos="fade-up" >Senior Secondary:<span className='text-orange-500'>Grades 11-12!!!</span></h1>
                    <h2 className='text-2xl  font-bold md:justify-center'data-aos="fade-up" >Subjects:</h2>
                    <h1 className='text-xl font-bold'>Science Stream:</h1>
                    <p className='text-xl' data-aos="fade-up" >  Physics, Chemistry, Biology, Mathematics, Computer Science, English

                        
                    </p>
                    <h1 className='text-xl font-bold'>Commerce Stream:</h1>
                    <p className='text-xl' data-aos="fade-up" > : Accountancy, Business Studies, Economics, Mathematics, English


                        
                    </p>
                    <p className='text-xl' data-aos="zoom-in" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veritatis unde incidunt beatae sunt, vero iure aliquid corrupti officia id sapiente animi quam eaque autem. Iusto consectetur quia quaerat dolor!

                        
                    </p>
                    
                    </div>
                   
                    
                    
                    
                    </div>
                    <div className='w-full  md:w-1/2 md:mt-10 mt-4 justify-center grid grid-flow-col'>
                        <img className='w-25 align-super' data-aos="zoom-in" src={er1} alt="" />
                    </div>
                
                
                
            </div>

           
            </div>
            
        
        <div>
            {/**
             teacjing section
             */}
            <div className='m-10'>
                <div>
                    <h1 className='text-4xl mt-16  text-orange-500  text-bold flex justify-center  font-bold underline'>
                        Teaching Methodalogies...
                    </h1>
                </div>
                <div className='flex-row mb-16'>
                    <p className='text-2xl justify-center flex mt-5 mb-5 md:justify-center m-6' data-aos="fade-up"> "We use a blend of traditional and modern teaching techniques to cater to different learning styles."
                    </p>
                    <p className='text-xl justify-center flex mt-5 mb-5 m-6' data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eaque facere a animi minima, reiciendis molestias accusantium exercitationem esse repudiandae necessitatibus consequuntur fugiat sed similique vero dolor unde tempore suscipit.
                    </p>
                </div>
            </div>
        </div>

        {/** educational resources */}
        <div>
        <div>
                <h1 className='text-4xl text-orange-500  text-bold flex justify-center mt-4 font-bold underline'>
                    Educational Resourcses
                </h1>
            </div>
            <div>
            <h1 className='text-2xl font-bold justify-center flex m-5' data-aos="fade-up" >We Offer <span className='text-orange-500'>Best </span> Educational Resources</h1>
            </div>
                <div>
                    <Swiperslider/>
                </div>
        </div>
        </>
    )
}

export default Academicsection
