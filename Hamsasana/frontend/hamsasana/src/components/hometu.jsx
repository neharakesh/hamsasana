import React from 'react'
import List from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";0
import Slider from "react-slick";
import Cards from './cards';

function Hometu() {
    const filterData=List.filter((data)=>  data.category==="free")
    

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 1,
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
        
        <div className='max-w-screen-2xl container mx-auto  md:px-20 px-4 '>
            <div>
            <h1 className='font-bold text-xl pb-2'>free offered courses</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tenetur voluptates quia architecto atque deleniti quidem! Doloribus voluptatibus dolor ut ullam placeat debitis. Mollitia rem iusto laborum, et libero animi!</p>
        
        </div>
        <div className="slider-container">
      <Slider {...settings}>
        {filterData.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
        </>
    )
}

export default Hometu
