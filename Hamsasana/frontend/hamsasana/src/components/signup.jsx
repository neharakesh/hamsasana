



import React from 'react';
import { Link } from 'react-router-dom';
import Login from './login';
import { useForm } from 'react-hook-form';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='flex h-screen justify-center items-center'>
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
              {...register("email", { required: true })} 
              type="email" 
              placeholder='Enter your email' 
              className='w-80 p-3 border rounded-md outline-none bg-white' 
            />
            {errors.email && <span className='text-red-500'>This field is required</span>}
          </div>
          {/* Username */}
          <div className='mt-4 space-y-2'>
            <label>Username</label>
            <br />
            <input 
              {...register("username", { required: true })} 
              type="text" 
              placeholder='Enter your username' 
              className='w-80 p-3 border rounded-md outline-none bg-white' 
            />
            {errors.username && <span className='text-red-500'>This field is required</span>}
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
