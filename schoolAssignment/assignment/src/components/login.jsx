
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import  toast,{ Toaster } from 'react-hot-toast';
import Choice from './choice';
import Signup from './signupstudent';


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    
    const userInfo={
      
      emailId:data.emailId,
      password:data.password
    }
    await axios.post("http://localhost:4001/user/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){

        toast.success('Logged in successfully');
        localStorage.setItem("Users",JSON.stringify(res.data.user))
        document.getElementById("my_modal_3").close();
        setTimeout(()=>{
          
        window.location.reload();
        
        },3000)
        
      }
      
    })
    .catch((err)=>{
      if(err.response){
        console.log(err);
        toast.error("Error:"+err.response.data.message);
        setTimeout(()=>{},3000)
      }
    })
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-white text-black">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={()=>document.getElementById("my_modal_3").close()}
              >✕</Link>
            
              <h3 className="font-bold text-lg">Login</h3>
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
              {/* Password */}
              <div className='mt-4 space-y-2'>
                <label>Password</label>
                <br />
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder='Enter your Password'
                  className='w-80 p-3 border rounded-md outline-none bg-white'
                />
                {errors.password && <span className='text-red-500'>This field is required</span>}
              </div>
              {/* Button */}
              <div className='flex justify-around mt-4'>
                <button
                  type="submit"
                  className='bg-orange-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
                >
                  Login
                  
                </button>
              </div>
                <p className='font-bold px-36 mt-4 '>
                  Not registered?{' '}
                
                            <a className=" text-orange-500 underline cursor-pointer" onClick={() => document.getElementById("my_modal_2").showModal()}>
                                signup
                            </a>
                            <Choice/>
                    
                </p>
              
          </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
