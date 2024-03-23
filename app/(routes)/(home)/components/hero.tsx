/* eslint-disable jsx-a11y/alt-text */
'use client';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const data = [
  'https://picsum.photos/seed/random101/500/500',
  'https://picsum.photos/seed/random102/500/500',
  'https://picsum.photos/seed/random101/500/500',
  // Add more image paths as needed
];

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', background: 'red' }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} bg-black`}
//       style={{
//         ...style,
//         display: 'block',
//         background: 'black',
//         position: 'absolute',
//         left: '0',
//         zIndex: 100,
//         color: 'red',
//       }}
//       onClick={onClick}
//     />
//   );
// }

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
    <div className="slider-container relative cursor-pointer">
      <Slider ref={sliderRef} {...settings}>
        {data.map((slider, ind) => (
          <div key={ind} className="relative lg:h-screen">
            <img
              src={
                'https://duruthemes.com/demo/html/renax/light/img/slider/1.jpg'
              }
              height={100}
              className="h-full w-full"
            />

            <div className="absolute bottom-0 left-0 inset-0 bg-black opacity-40 w-full z-10"></div>

            <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti quis cumque explicabo dolorum voluptatem ad sint labore
              </p>
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
        max={3}
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
