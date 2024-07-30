import React from 'react'
import stu1 from '../../public/images/stu1.jpg'
import Timeline from './timeline'

function About() {
    return (
        <>
        <div>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-2 flex md:mt-4 flex-col md:flex-row bg-white mt-10 mb-10 dark:bg-slate-900 dark:text-white md:space-x-40'>
        
        <div className='w-full   md:mt-14 mt-12 md:w-1/3 justify-center grid grid-flow-col'>
            <img className='w-25 align-super' src={stu1} alt="" />
        </div>
        <div className='w-full  md:w-1/2 md:mt-32 mt-12 justify-center grid grid-flow-col'>
                    <div className='space-y-12 '>
                    <h1 className='text-4xl font-bold'>Hello,Welcome here to learn something <span className='text-orange-500'>new everyday!!!</span></h1>
                    
                    <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit architecto molestiae exercitationem modi doloremque. Odit fugiat voluptatibus numquam ducimus esse quod voluptatem libero eveniet aliquam saepe quibusdam commodi, accusamus nostrum!
                        
                    </p>
                    
                    </div>
                   
                    
                    
                    
        </div>
        </div>
        </div>
        <div className='bg-white'>
            <h1 className='text-4xl font-bold text-orange-500 flex justify-center'>Historical Events..</h1>
            <Timeline/>
        </div>
        <div>
        <h1 className='text-4xl font-semibold text-orange-500 flex justify-center underline'>Our vision</h1>
        <p className='m-10 text-xl '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam laboriosam aspernatur sequi possimus inventore omnis nisi nesciunt obcaecati hic repellat. Consequatur consectetur natus provident odio ipsum. Exercitationem molestias explicabo molestiae.</p>
        </div>
        </>
    )
}

export default About
