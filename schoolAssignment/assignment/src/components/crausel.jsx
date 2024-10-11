import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img2 from '../../public/images/img2.jpg'

import img3 from '../../public/images/img3.jpg'

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Crausel() {
    return (
        <>
        <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            
            <img src={img2} alt="" />
        </SwiperSlide>
        
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        
      </Swiper>
        </>
        
    )
}

export default Crausel




