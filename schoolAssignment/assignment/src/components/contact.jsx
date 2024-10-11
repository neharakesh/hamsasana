import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from 'lottie-react';
import contact from '../../public/images/contact1.json';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c3o0cf1', 'template_hekaw5c', form.current, 'nHTLF_tusAg3_2TQr')
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error.text);
            });
    };

    return (
        <>
            <form ref={form}>
                <div className='bg-white dark:bg-slate-900 dark:text-white max-w-screen container md:px-20 px-2 md:flex-col'>
                    <h1 className='font-bold text-left px-8 text-3xl mt-6'>Contact Us</h1>
                    <div className='flex flex-col md:flex-row bg-white dark:bg-slate-900 dark:text-white mt-0 justify-center'>
                        <div className='bg-white dark:bg-slate-900 dark:text-white px-2 md:flex-row w-full md:w-1/2 md:mt-10 mt-12 justify-center grid grid-flow-col'>
                            <Lottie loop={true} autoplay={true} animationData={contact} />
                        </div>
                        <div className='w-full md:w-1/2 grid grid-flow-row justify-center mt-5 space-y-2 bg-white dark:bg-slate-900 dark:text-white'>
                            <h3 className='font-bold text-xl'>Email</h3>
                            <label className="input input-bordered flex items-center gap-2 bg-white dark:bg-slate-800 dark:text-white text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="h-4 w-4 opacity-70">
                                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="email" className="grow" placeholder="Email" name='from_email' required />
                            </label>
                            <h3 className='font-bold text-xl'>Username</h3>
                            <label className="input input-bordered flex items-center gap-2 bg-white dark:bg-slate-800 dark:text-white text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="h-4 w-4 opacity-70">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input type="text" className="grow" placeholder="Username" name='from_name' required />
                            </label>
                            <h3 className='font-bold text-xl'>Message</h3>
                            <label className='border-transparent flex items-center gap-2 bg-white dark:bg-slate-800 dark:text-white text-black'>
                                <textarea name="message" id="message" cols="50" rows="10" className='bg-white border border-gray-300 dark:border-gray-600 rounded-md dark:bg-slate-800 dark:text-white text-black p-2' placeholder='Write your Message...' required></textarea>
                            </label>
                            <button type='submit' className="space-y-5 btn btn-xs border-none bg-orange-500 text-white hover:bg-orange-700 cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300 sm:btn-sm md:btn-md lg:btn-lg" onSubmit={sendEmail}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Contact;

