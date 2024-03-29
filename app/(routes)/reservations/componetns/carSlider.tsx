/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const img = [1, 2, 3];
const CarSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={5}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {img.map((slide, ind) => (
          <SwiperSlide key={ind}>
            <img
              className="h-72 w-full rounded mb-1"
              src="https://swiperjs.com/demos/images/nature-8.jpg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={5}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {img.map((slide, ind) => (
          <SwiperSlide key={ind}>
            <img
              className="h-36 w-full rounded mb-1"
              src="https://swiperjs.com/demos/images/nature-8.jpg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarSlider;
