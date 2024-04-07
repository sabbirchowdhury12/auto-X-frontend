/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function ImageSlider({ selectedCar }: any) {
  const images = selectedCar?.images;

  return (
    <>
      <Swiper
        style={{}}
        loop={true}
        spaceBetween={10}
        navigation={true}
        className="rounded mb-4"
      >
        {images?.map((img: string) => (
          <SwiperSlide key={img}>
            <img src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
