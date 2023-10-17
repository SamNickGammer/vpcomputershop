import React from 'react'
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
          slidesPerView={3}
          spaceBetween={15}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper home__category__swiper"
        >
          <SwiperSlide className='home__category__slide'>Slide 1</SwiperSlide>
          <SwiperSlide className='home__category__slide'>Slide 2</SwiperSlide>
          <SwiperSlide className='home__category__slide'>Slide 3</SwiperSlide>
          <SwiperSlide className='home__category__slide'>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default HomePage