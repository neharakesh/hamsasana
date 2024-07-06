import React from 'react'
import Lottie from 'lottie-react'


import contact from '../../public/images/contact1.json'

function Contact() {
    return (
        <>
        <div className='bg-slate-100 dark:bg-slate-900 dark:text-white md:flex-col  md:grid-flow-col'>
        <h1 className='font-bold  text-left px-8 text-3xl mt-6 '>Contact Us</h1>
            <div className='  flex flex-row  bg-slate-100 dark:bg-slate-900 dark:text-white mt-0'>
            <div className='w-full m-28 mt-5  bg-slate-100 dark:bg-slate-900 dark:text-white grid grid-flow-col'>
            
                 <Lottie  loop={true} autoplay={true} animationData={contact} />
            </div>
                <div className='w-1/4 m-40 mt-5 space-y-2 bg-slate-100 dark:bg-slate-900 dark:text-white'>
                    <h3 className='font-bold text-xl'>Email</h3>
                    <label className="input input-bordered flex items-center gap-2 bg-white dark:bg-slate-800 dark:text-white text-black">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    
                    className="h-4 w-4 opacity-70">
                    <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                
                    <input type="text" className="grow" placeholder="Email" />
                    </label>
                    <h3 className='font-bold text-xl'>Username:</h3>
                    <label className="input input-bordered flex items-center gap-2 bg-white dark:bg-slate-800 dark:text-white text-black">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                
                    className="h-4 w-4 opacity-70">
                    <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Username" />
                    </label>
                    <h3 className='font-bold text-xl'>Message: </h3>
                    <br/>
                    <label>
                    <textarea name="message" id="messaage" cols="50" rows="10" className='bg-white rounded-md dark:bg-slate-800 dark:text-white text-black ' placeholder='Write your Message...' ></textarea>
                    </label>
                    <button className="btn btn-xs border-none bg-orange-500 text-white hover:bg-orange-700 cursor-pointer hover:-translate-y-1 hover:scale-110 duration:300s sm:btn-sm md:btn-md lg:btn-lg">Submit</button>
                    
                
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Contact
