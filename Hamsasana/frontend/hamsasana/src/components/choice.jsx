import React from 'react'
import Signup from './signup'
import { Link } from 'react-router-dom';

function Choice() {
    function redirectToSignup() {
        alert("jii")
    }
    return (
        <>
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button  onClick={()=>document.getElementById('my_modal_2').showModal()}></button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box bg-white p-20 gap-5 space-y-5 flex flex-col">
    <div >
    <a href="" className='flex flex-row text-xl gap-4'>
    <input type="radio" name="radio-8" className="radio radio-error flex  " / >
    Signup as Student
    
    </a>
  </div>
  <div>
    <a href="" className='flex flex-row text-xl gap-4'>
    <input type="radio" name="radio-8" className="radio radio-error"/>
    Signup as Teacher
    </a>
  </div>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
        </div>
        
    
        </>
    )
}

export default Choice
