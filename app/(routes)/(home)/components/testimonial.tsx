'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Heading from './heading';
import CustomImage from '@/components/customImage';

const testimonials = [
  {
    name: 'John Doe',
    position: 'CEO at Example',
    testimonial:
      'This service is fantastic! It has made my life much easier, and I would recommend it to everyone.',
    image:
      'https://media.istockphoto.com/id/1501770003/photo/happy-handsome-young-indian-man-head-shot-front-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=e8Ag8EsPlHD4gKmJGaZApE5d4m6bV6BWnQqwjIaKXoA=',
  },
  {
    name: 'Jane Smith',
    position: 'CTO at Example',
    testimonial:
      'A wonderful experience from start to finish. I’m extremely satisfied with the results!',
    image:
      'https://media.istockphoto.com/id/1501770003/photo/happy-handsome-young-indian-man-head-shot-front-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=e8Ag8EsPlHD4gKmJGaZApE5d4m6bV6BWnQqwjIaKXoA=',
  },
  {
    name: 'Sam Johnson',
    position: 'Manager at Example',
    testimonial:
      'Highly professional and reliable. They exceeded all my expectations!',
    image:
      'https://media.istockphoto.com/id/1501770003/photo/happy-handsome-young-indian-man-head-shot-front-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=e8Ag8EsPlHD4gKmJGaZApE5d4m6bV6BWnQqwjIaKXoA=',
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <Heading title="Clients Review" sub_title="Testimonial" />

        <Swiper
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          loop
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white mt-10 rounded-lg p-8 shadow-lg mx-auto">
                <div className="text-center flex flex-col items-center">
                  <div className="flex gap-4 items-center">
                    {' '}
                    <CustomImage
                      className="w-16 h-16 rounded-full mx-auto mb-4"
                      src={testimonial.image}
                      alt={`${testimonial.name}'s photo`}
                    />
                    <div>
                      <h3 className="text-xl  font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-primary">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
