import React from 'react'
import Cards from './cards'
import list from '../../public/list.json'


function Course() {
    return (
        <>
        <div className='max-w-screen-2xl  container mx-auto md:px-20 px-4'>
            <div className='mt-28 just text-center'>
                <h1 className='text-3xl font-bold md:text-4xl'>We are delighted to have you <span className='text-pink-500'>Here!:)</span></h1>
                <p className='mt-12 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam aliquid tenetur, cum quod, delectus deserunt nam, possimus magnam dignissimos a odit iure mollitia debitis commodi nisi consequuntur illum explicabo tempora.</p>
            </div>

            <div className='mt-12 grid md:grid-cols-3 grid-cols-1 '>
                {
                    list.map((item)=>(
                        <Cards item={item} key={item.id}/>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default Course
