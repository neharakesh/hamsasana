import React from 'react'
import er1 from '../../public/images/er1.jpg'
function Cards() {
  return (
    <>
    <div className='grid md:grid-flow-col md:grid-cols-3 grid-flow-row justify-center'>
    <div className="card bg-white w-96 shadow-xl m-8 space-x-3 dark:bg-gray-600">
  <figure>
    <img className='flex justify-center m-4 mt-8 border-black rounded-md'
      src={er1}
      alt="Teacher" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary ">Power</div>
    </h2>
    <p>Knowledge is the key to success</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Education</div>
      <div className="badge badge-outline">knowledge</div>
    </div>
  </div>
</div>

<div className="card bg-white w-96 shadow-xl m-8 space-x-3 dark:bg-gray-600">
  <figure>
    <img className='flex justify-center m-4 mt-8 border-black rounded-md'
      src={er1}
      alt="Teacher" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">Power</div>
    </h2>
    <p>Knowledge is the key to success</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Education</div>
      <div className="badge badge-outline">knowledge</div>
    </div>
  </div>
</div>

<div className="card bg-white w-96 shadow-xl m-8 space-x-3 dark:bg-gray-600">
  <figure>
    <img className='flex justify-center m-4 mt-8 border-black rounded-md'
      src={er1}
      alt="Teacher" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">Power</div>
    </h2>
    <p>Knowledge is the key to success</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Education</div>
      <div className="badge badge-outline">knowledge</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Cards


