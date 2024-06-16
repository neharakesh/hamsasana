import React from 'react'
import tech from '../../public/images/tech.jpg'
import Crausel from './crausel'


function Banner() {
    return (
        <>
        
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row bg-white mt-10 mb-10'>
                <div className='w-full md:w-1/2 md:mt-32 mt-12'>
                    <div className='space-y-12 '>
                    <h1 className='text-4xl font-bold'>Hello,Welcome here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>
                    
                    <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit architecto molestiae exercitationem modi doloremque. Odit fugiat voluptatibus numquam ducimus esse quod voluptatem libero eveniet aliquam saepe quibusdam commodi, accusamus nostrum!
                        
                    </p>
                    </div>
                    </div>
                    <div className='px-32 '>
                        <img className='w-25' src={tech} alt="" />
                    </div>
                
                
                
            </div>
            
        </>
        
    )
}

export default Banner
