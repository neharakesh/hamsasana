import React from 'react'
import er1 from '../../public/images/er1.jpg'
import er2 from '../../public/images/er2.jpg'
import er3 from '../../public/images/er3.jpg'
import er4 from '../../public/images/er4.jpg'
import er5 from '../../public/images/er5.jpg'
import er6 from '../../public/images/er6.jpg'
import er7 from '../../public/images/er7.jpg'
function Swiperslider() {
    return (
        <>
            <div className="carousel carousel-center  rounded-box w-full bg-white dark:bg-slate-900 space-x-4 p-4">
  <div className="carousel-item">
    <img
      src={er1}
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
     src={er2}
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
     src={er3}
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src={er4}
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src={er5}
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src={er6}
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src={er7}
      className="rounded-box" />
  </div>
</div>
        </>
    )
}

export default Swiperslider
