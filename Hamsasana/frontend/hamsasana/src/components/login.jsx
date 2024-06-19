
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-white text-black">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              <h3 className="font-bold text-lg">Login</h3>
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
                  className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
                >
                  Login
                </button>
                <p className='font-bold'>
                  Not registered?{' '}
                  <Link to="/Signup" className='underline text-blue-500 cursor-pointer'>Signup</Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
