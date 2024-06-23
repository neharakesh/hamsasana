import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import './style.css';
function Cards({item}) {
  const[isFlipped,setIsFlipped]=useState(false);
  {/*const handleFlip=()=>{
    setIsFlipped(!isFlipped)
  }*/}
  function flipCard(){
    setIsFlipped(!isFlipped)
  }
  
    {/*method 1 of flipping card without react card flip  
      write this inside return*/}
    {/*
    <>
    
    <div onClick={handleFlip}
    className={`relative card ${isFlipped? 'cardFlip':''}` }>
    <div className='front'>
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
<div  className='absolute top-0 back'>
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
</div>

    </>
    */}
    return(
    <>
    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
    <div className='front' onClick={flipCard}>
      
    
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
    <div className='back' onClick={flipCard}>
        <div className="card w-96 bg-white border-slate-950 border-8 shadow-xl my-3 p-3 hover:scale-105 duration-200 dark:bg-slate-600 cursor-pointer dark:border-slate-100">
        <figure><img src={item.image} alt="Shoes" /></figure>
        <div className="card-body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, inventore deserunt est quaerat temporibus doloremque similique optio quasi fuga iusto quidem sed praesentium labore minus aut ullam, nostrum molestiae. Adipisci?</p>
          <p>{item.title}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div> 
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>

    </div>
  </ReactCardFlip>
</>

  )
}

export default Cards

