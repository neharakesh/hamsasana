import React from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/authprovider'

function Logout() {
    const [authUser,setAuthUser]=useAuth()
    const handleLogout=()=>{
        try{
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("logout successfully")
            setTimeout(()=>{
               
                window.location.reload()
            },3000)
            
        }catch(error){
            toast.error("error",error.message)
            setTimeout(()=>{},3000)
        }
    }
    
    return (
        <div>
            <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer '
            onClick={handleLogout}
            >

                Logout
            </button>
        </div>
    )
}

export default Logout
