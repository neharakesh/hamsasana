import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";0
import Slider from "react-slick";
import axios from 'axios';
import Cards from "../components/cards.jsx"


function Hometu() {
  
    const [tutor,setTutor]=useState([])
    useEffect(()=>{
      const getTutor=async()=>{
        try{
          const res=await axios.get("http://localhost:4001/tutor")
          console.log(res.data)
          setTutor(res.data)
        }catch(error){
          console.log(error)
        }
      }
      getTutor()
    },[])



    const filterData=tutor.filter((data)=>  data.category==="IIT")
    console.log(filterData)
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    

    return (
        <>
          
        <div className='maz-w-screen-2xl container mx-auto md:px-20 px-4 bg-white dark:bg-slate-900 dark:text-white'>
              <div>
              <h1 className='font-bold text-2xl pb-2 justify-center text-center md:text-3xl'>A Platform Trusted by Students Worldwide</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolores perferendis recusandae quaerat quis rerum dignissimos fugit reprehenderit, quae quibusdam tenetur. Velit qui illum inventore eaque voluptate obcaecati tenetur animi!</p>
            </div>
            
            <div className="slider-container  ">
      <Slider {...settings}>
        {filterData.map((item)=> (
          <Cards item={item} key={item.id}/>
        ))}
        <cards/>
      </Slider>
    </div>
    </div>
        </> 
    )
}

export default Hometu
