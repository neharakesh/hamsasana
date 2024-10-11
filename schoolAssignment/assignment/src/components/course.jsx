import React, { useEffect, useState } from 'react'
import Cards from './cards'

import axios from 'axios'
import { Link } from 'react-router-dom'


function Course() {
    const[tutor,setTutor]=useState([])
    useEffect(()=>{
        const getTutor=async()=>{
            try{
            const res= await axios.get("http://localhost:4001/tutor")
            console.log(res.data)
            setTutor(res.data)
            }catch(error){
                console.log(error)
            }
        }
        getTutor()
    },[])
    return (
        <>
        <div className='max-w-screen-2xl  container mx-auto md:px-20 px-4'>
            <div className='mt-28 just text-center'>
                <h1 className='text-3xl font-bold md:text-4xl'>We are delighted to have you <span className='text-pink-500'>Here!:)</span></h1>
                <p className='mt-12 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam aliquid tenetur, cum quod, delectus deserunt nam, possimus magnam dignissimos a odit iure mollitia debitis commodi nisi consequuntur illum explicabo tempora.</p>
                <Link to="/">
                    <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink duration-200'>
                    Back
                    </button>
                </Link>
            </div>

            <div className='mt-12 grid md:grid-cols-3 grid-cols-1 '>
                {
                    tutor.map((item)=>(
                        <Cards item={item} key={item.id}/>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default Course
