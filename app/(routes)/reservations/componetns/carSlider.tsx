/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function ImageSlider({ selectedCar }: any) {
  const images = selectedCar?.images;

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 h-48 w-60 sm:w-96  block"
      >
        {images?.map((img: string) => (
          <SwiperSlide key={img} className="h-full w-full">
            <img className="h-full  w-full" src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={4}
        // freeMode={true}
        // watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper  my-4 "
      >
        {images?.map((img: string) => (
          <SwiperSlide key={img} className="h-full w-full">
            <img className="h-full  w-full" src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
