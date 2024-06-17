import React from 'react'

function Cards({item}) {
  return (
    <>
    <div>
    <div className="card w-96 bg-white border-slate-950 border-8 shadow-xl my-3 p-3 hover:scale-105 duration-200 dark:bg-slate-600 cursor-pointer dark:border-slate-100">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
</div>

    </>
  )
}

export default Cards

