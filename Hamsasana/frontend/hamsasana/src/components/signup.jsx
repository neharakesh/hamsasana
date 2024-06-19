import React from 'react'
import { Link } from 'react-router-dom'
import Login from './login'


function Signup() {
    return (
        <>
        <div id="my_modal_3" className='flex h-screen justify-center items-center  '>
  <div className=" bg-white border-2 text-black shadow-md rounded-md p-8 modal-box">
    <form method="dialog ">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Signup</h3>
      {/*email*/ }
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type="email" placeholder='Enetr your email' className='w-80 p-3 border rounded-md outline-none bg-white' />
    </div>

    <div className='mt-4 space-y-2'>
        <span>UserName</span>
        <br/>
        <input type="name" placeholder='Enetr your name' className='w-80 p-3 border rounded-md outline-none bg-white' />
    </div>
    {/*password*/ }
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br/>
        <input type="password" placeholder='Enetr your Password' className='w-80 p-3 border rounded-md outline-none bg-white' />
    </div>
      {/*Button*/ }
      <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
        <div className='text-bold'>Have Account? {" "}
          <button className='underline text-blue-500 cursor-pointer'
          onClick={()=>
            document.getElementById("my_modal_3").showModal()
          }
          > Login</button>{" "}
          <Login/>
          </div>
      </div>
  </div>
</div>
        </>
    )
}

export default Signup
