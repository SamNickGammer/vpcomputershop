import React from 'react'
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Laptop_Image_Slide } from '../assets';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const HomePage = () => {
  return (
    <div className='home'>
      <div className="home__banner">Banner Goes here 
        {/* Todo : Make Banner carousel */}
      </div>
      <div className="home__category">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper home__category__swiper"
        >
          <SwiperSlide className='home__category__slide'>
            <img src={Laptop_Image_Slide} alt="" />
          </SwiperSlide>
          <SwiperSlide className='home__category__slide'>Slide 2</SwiperSlide>
          <SwiperSlide className='home__category__slide'>Slide 3</SwiperSlide>
          <SwiperSlide className='home__category__slide'>Slide 3</SwiperSlide>
          <SwiperSlide className='home__category__slide'>Slide 3</SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default HomePage