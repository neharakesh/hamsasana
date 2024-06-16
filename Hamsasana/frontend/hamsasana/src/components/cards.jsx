import React from 'react'

function Cards({item}) {
  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card w-92 bg-base-100 shadow-xl cursor-pointer  hover:">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-end ">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">buy</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Cards

