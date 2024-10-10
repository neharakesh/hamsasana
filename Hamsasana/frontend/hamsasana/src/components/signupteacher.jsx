
import React from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Login from './login';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import  toast,{ Toaster } from 'react-hot-toast';

function Signupteacher() {
    const loaction=useLocation()
  const navigate=useNavigate()
  const from=location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo={
      fullName:data.fullName,
      emailId:data.emailId,
      
      mobileNum:data.mobileNum,
      description:data.description,
      subject:data.subject,
      link:data.link,
      details:data.details,
      password:data.password,
    }
    await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('SignUp successfully');
        navigate(from,{replace:true})
        
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user))
    })
    .catch((err)=>{
      if(err.response){
        toast.error("Error:"+err.response.data.message);
      }
    })
  };

  return (
    <div className='bg-slate-100 dark:bg-slate-900 dark:text-white max-w-screen container md:px-20 px-2 md:flex-col mb-10'>
        <h1 className='font-bold text-left px-8 text-3xl mt-4'>Sign up</h1>
    <div id='sign' className='flex flex-col md:flex-row bg-slate-100 dark:bg-slate-900 dark:text-white mt-0 '>
        
        <div className='bg-white dark:bg-slate-900 dark:text-white px-2 md:flex-row w-full md:w-1/2 md:mt-10 mt-12 justify-center grid grid-flow-col'>
        
        </div>
      <div className="bg-slate-100 dark:bg-slate-900 dark:text-white px-2 md:flex-row w-full md:w-1/2 md:mt-10 mt-12  grid grid-flow-col">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close button */}
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          
          {/* Email */}
          <div className='mt-4 space-y-2 w-full'>
          <h3 className='font-bold text-xl'>Email</h3>
            <label className="input input-bordered flex items-center gap-2 bg-white dark:bg-slate-800 dark:text-white text-black">
            <br />
            <input 
              {...register("emailId", { required: true })} 
              type="email" 
              placeholder='Enter your email' 
              className=" w-full max-w-2xl" 
            />
            {errors.emailId && <span className='text-red-500'>This field is required</span>}
            </label>
          </div>
          {/* Username */}
          <div className='mt-4 space-y-2'>
          <h3 className='font-bold text-xl'>Username</h3>
            <label className="input input-bordered flex items-center gap-2 bg-white dark:bg-slate-800 dark:text-white text-black">
            <br />
            <input 
              {...register("fullName", { required: true })} 
              type="text" 
              placeholder='Enter your username' 
              className=" w-full max-w-2xl" 
            />
            {errors.fullName && <span className='text-red-500'>This field is required</span>}
            </label>
          </div>
          
          {/*mobile*/}
          <div className='mt-4 space-y-2'>
          <h3 className='font-bold text-xl'>Contact Information</h3>
            <label className="input input-bordered flex items-center gap-2 bg-white dark:bg-slate-800 dark:text-white text-black">
            <br />
            <input 
              {...register("mobileNum", { required: true })} 
              type=""
              placeholder='Enter your Contact' 
              className=" w-full max-w-2xl" 
            />
            {errors.mobileNum && <span className='text-red-500'>This field is required</span>}
            </label>
          </div>
        {/*Description */}
        <div className='mt-4 space-y-2'>
        <h3 className='font-bold text-xl'>Description</h3>
            <label className="input input-bordered flex items-center gap-2 bg-white dark:bg-slate-800 dark:text-white text-black">
            <br />
            <input 
              {...register("description", { required: true })} 
              type="text" 
              placeholder='write Your Description here...' 
              className=" w-full max-w-2xl" 
               />
            {errors.description && <span className='text-red-500'>This field is required</span>}
          </label>
          </div>

          {/*Subject */}
        <div className='mt-4 space-y-2'>
        <h3 className='font-bold text-xl'>Subjects</h3>
            <label className="input input-bordered flex items-center gap-2 bg-white dark:bg-slate-800 dark:text-white text-black">
            <br />
            <input 
              {...register("Subject", { required: true })} 
              type="text" 
              placeholder='Enter your Subjects' 
              className=" w-full max-w-2xl" 
            />
            {errors.subject && <span className='text-red-500'>This field is required</span>}
            </label>
          </div>

          {/*link */}
        <div className='mt-4 space-y-2'>
        <h3 className='font-bold text-xl'>Links</h3>
            <label className="input input-bordered flex items-center gap-2 bg-white dark:bg-slate-800 dark:text-white text-black">
            <br />
            <input 
              {...register("Subject", { required: true })} 
              type="link" 
              placeholder='Enter your linkdin id,gmail,youtube.com....' 
              className=" w-full max-w-2xl" 
             
            />
            {errors.subject && <span className='text-red-500'>This field is required</span>}
          </label>
          </div>

           {/*Details*/}
        <div className='mt-4 space-y-2'>
        <h3 className='font-bold text-xl'>Moredetails</h3>
            <label className="input input-bordered flex items-center gap-2 bg-white dark:bg-slate-800 dark:text-white text-black">
            <br />
            <input 
              {...register("Details")} 
              type="link" 
              placeholder='Enter your linkdin id,gmail,youtube.com....' 
              className=" w-full max-w-2xl" 
            />
            {errors.details && <span className='text-red-500'>This field is required</span>}
          </label>
          </div>

          {/* Password */}
          <div className='mt-4 space-y-2'>
          <h3 className='font-bold text-xl'>Password</h3>
            <label className="input input-bordered flex items-center gap-2 bg-white dark:bg-slate-800 dark:text-white text-black">
            <br />
            <input 
              {...register("password", { required: true })} 
              type="password" 
              placeholder='Enter your password' 
              className=" w-full max-w-2xl" 
            />
            {errors.password && <span className='text-red-500'>This field is required</span>}
            </label>
          </div>
          


          {/* Button */}
          <div className='flex justify-around mt-4 mb-10'>
            <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
            <div className='font-bold'>
              Have Account?{" "}
              <button 
                className='underline text-blue-500 cursor-pointer'
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
              
                <Login />
            
            </div>
          </div>
        </form>
      </div>
      </div>
    

    </div>
  );
}

export default Signupteacher;
