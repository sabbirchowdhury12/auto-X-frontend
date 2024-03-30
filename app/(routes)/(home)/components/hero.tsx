/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client';
import { Button } from '@/components/ui/button';
import { MoveUpRight } from 'lucide-react';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const data = [
  {
    img: 'https://duruthemes.com/demo/html/renax/light/img/slider/12.jpg',
    heading: 'RENT CAR',
    title: 'Enjoy Your Journey',
  },
  {
    img: 'https://duruthemes.com/demo/html/renax/light/img/slider/1.jpg',
    heading: 'GET CAR',
    title: 'Make Your Journey Safe',
  },
  {
    img: 'https://duruthemes.com/demo/html/renax/light/img/slider/11.jpg',
    heading: 'RENT CAR',
    title: 'Enjoy Your Journey ',
  },
];

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current: number, next: number) => setSlideIndex(next),
  };
  return (
    <div className="slider-container relative cursor-pointer overflow-hidden ">
      <Slider ref={sliderRef} {...settings}>
        {data.map((slider, ind) => (
          <div key={ind} className="relative lg:h-screen">
            <img src={slider?.img} className="h-full w-full" />

            <div className="absolute bottom-0 left-0 inset-0 bg-black opacity-50 w-full z-10"></div>

            <div className="absolute z-20  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center fade">
              <p className=" text-primary font-bold uppercase tracking-widest		text-xs">
                Premium*
              </p>
              <h2 className="md:text-4xl font-bold text-lg my-2  md:my-4 ">
                {slider?.heading}
              </h2>
              <h2 className="text-sm md:text-2xl   flex justify-center ">
                {slider?.title}{' '}
                <p className="font-bold text-primary ">/24 hours</p>
              </h2>
              <div className="mt-4 md:mt-10 flex  items-center">
                <Button>
                  Veiw Deatails <MoveUpRight size={14} className="ml-2" />
                </Button>
                <Button variant={'defaultOutline'} className="ml-4">
                  Rent Now <MoveUpRight size={14} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <input
        onChange={e =>
          (sliderRef.current as Slider)?.slickGoTo(parseInt(e.target.value))
        }
        value={slideIndex}
        className="w-full  absolute bottom-1"
        type="range"
        min={0}
        max={2}
        style={{
          color: 'blue',
          width: '100%',
          height: '5px',
          background: 'black',
          outline: 'none',
        }}
      />
    </div>
  );
};

export default Hero;
