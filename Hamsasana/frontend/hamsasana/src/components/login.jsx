import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
    return (
        <>
        <div>
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-white text-black">
    <form method="dialog ">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg ">Login </h3>
      {/*email*/ }
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type="email" placeholder='Enetr your email' className='w-80 p-3 border rounded-md outline-none bg-white' />
    </div>
    {/*password*/ }
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br/>
        <input type="password" placeholder='Enetr your Password' className='w-80 p-3 border rounded-md outline-none bg-white' />
    </div>
      {/*Button*/ }
      <div className='flex justify-around mt-4'>
        <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
        <p className='text-bold'>Not registered ? 
          <Link to="/Signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
      </div>
  </div>
</dialog>
</div>
        </>
    )
}

export default Login
