



import React from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Login from './login';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import  toast,{ Toaster } from 'react-hot-toast';
function Signup() {
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
      password:data.password,
      mobileNum:data.mobileNum
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
    <div id='sign' className='flex h-screen justify-center items-center'>
      <div className="bg-white border-2 text-black shadow-md rounded-md p-8 modal-box">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close button */}
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          <h3 className="font-bold text-lg">Signup</h3>
          {/* Email */}
          <div className='mt-4 space-y-2'>
            <label>Email</label>
            <br />
            <input 
              {...register("emailId", { required: true })} 
              type="email" 
              placeholder='Enter your email' 
              className='w-80 p-3 border rounded-md outline-none bg-white' 
            />
            {errors.emailId && <span className='text-red-500'>This field is required</span>}
          </div>
          {/* Username */}
          <div className='mt-4 space-y-2'>
            <label>FullName</label>
            <br />
            <input 
              {...register("fullName", { required: true })} 
              type="text" 
              placeholder='Enter your username' 
              className='w-80 p-3 border rounded-md outline-none bg-white' 
            />
            {errors.fullName && <span className='text-red-500'>This field is required</span>}
          </div>
          {/* Password */}
          <div className='mt-4 space-y-2'>
            <label>Password</label>
            <br />
            <input 
              {...register("password", { required: true })} 
              type="password" 
              placeholder='Enter your password' 
              className='w-80 p-3 border rounded-md outline-none bg-white' 
            />
            {errors.password && <span className='text-red-500'>This field is required</span>}
          </div>
          {/*mobile*/}
          <div className='mt-4 space-y-2'>
            <label>Mobile NO.</label>
            <br />
            <input 
              {...register("mobileNum", { required: true })} 
              type=""
              placeholder='Enter your Mobile Number' 
              className='w-80 p-3 border rounded-md outline-none bg-white' 
            />
            {errors.mobileNum && <span className='text-red-500'>This field is required</span>}
          </div>
          {/* Button */}
          <div className='flex justify-around mt-4'>
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
  );
}

export default Signup;
