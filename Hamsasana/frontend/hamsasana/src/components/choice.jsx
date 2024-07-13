import React from 'react'
import Signup from './signupstudent'
import { Link } from 'react-router-dom';

function Choice() {
    function redirectToSignup() {
        
    }
    return (
        <>
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_2" className="modal">
  <div className="modal-box bg-white p-20 gap-5 space-y-5 flex flex-col ">
    <div  className='flex flex-row '>
    <a>
    

    <Link to="/Signup" className=" bg-orange-300 px-28 py-4 rounded-lg hover:bg-orange-500 hover:scale-105 duration-300" >Signup As Student</Link>
    
    
    
    
    </a>
  </div>
  <div  className='flex flex-row '>
    <a>
    

    <Link to="/Signup" className=" bg-orange-300 px-28 py-4 rounded-lg hover:bg-orange-500 hover:scale-105 duration-300" >Signup As Teacher</Link>
    
    
    
    
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
