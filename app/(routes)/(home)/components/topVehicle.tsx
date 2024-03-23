'use client';

import car1 from '@/assets/auth-image.png';
import car2 from '@/assets/car-2.png';
import ImageSlider from '@/components/imageSlider';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useState } from 'react';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import CustomImage from '@/components/customImage';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TopVehicle = () => {
  const Vehicles = [
    {
      id: 1,
      name: 'Audi A1 S-line',
      images: [car1, car2],
      price: '60',
      model: 'Spider 007',
      Mark: 'Audi',
      Year: '2016',
    },
    {
      id: 2,
      name: 'Volkswagen 01',
      images: [car2, car1],
      price: '90',
      model: 'golf 6',
      Mark: 'Volkswagen',
      Year: '2013',
    },
    {
      id: 3,
      name: 'Mercedes',
      images: [car1, car2],
      price: '110',
      model: 'mercedes',
      Mark: 'Mercedes',
      Year: '2011',
    },
    {
      id: 4,
      name: 'BMW',
      images: [car2, car1],
      price: '49',
      model: 'ABC 6',
      Mark: 'BMW',
      Year: '2010',
    },
  ];

  const [activeBtn, setActiveBtn] = useState(0);
  const [selectedVehicle, setSelectedVehicle] = useState(Vehicles[0]);

  const handleChange = (id: number) => {
    setActiveBtn(id);
    setSelectedVehicle(Vehicles[id]);
  };

  return (
    <section className="text-center py-28 bg-black text-white">
      <h3 className="uppercase text-sm font-extrabold opacity-90">
        Meet The Fleet
      </h3>
      <h2 className="text-2xl md:text-3xl font-bold mt-2">
        Our Most Popular Rental Vehicle
      </h2>

      <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-5 gap-4 justify-between p-10 my-6">
        <div className="col-span-1">
          {Vehicles.map((vehicle, index) => (
            <Button
              key={vehicle.id}
              onClick={() => handleChange(index)}
              className={`flex flex-col justify-center items-center mb-4 text-center  font-bold py-4 px-10 w-full text-md text-white hover:bg-white hover:text-black ${index === activeBtn ? 'bg-white text-black' : 'bg-black border border-white'} transition-all`}
            >
              {vehicle.name}
            </Button>
          ))}
        </div>
        <div className="col-span-2 lg:col-span-3 md:w-[90%] lg:w-2/3 mx-auto flex items-center justify-center">
          <ImageSlider urls={selectedVehicle.images} />
        </div>
        <div className="col-span-1 rounded-md p-2">
          <h1 className="text-2xl font-extrabold bg-white text-black py-1">
            ${selectedVehicle.price} <span className="text-lg"> / per day</span>
          </h1>
          <Table className="border">
            <TableBody>
              <TableRow>
                <TableCell className="border font-bold">model</TableCell>
                <TableCell>{selectedVehicle.model}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border font-bold">Mark</TableCell>
                <TableCell>{selectedVehicle.Mark}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border font-bold">Year</TableCell>
                <TableCell>{selectedVehicle.Year}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button
            size={'lg'}
            className="w-full mt-4 bg-white hover:bg-black text-black hover:text-white hover:border hover:border-white shadow-sm shadow-white rounded-none"
          >
            BOOK NOW
          </Button>
        </div>
      </div>

      <div className="md:hidden">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {Vehicles.map((vehicle, index) => (
            <SwiperSlide key={vehicle.id}>
              <div
                onClick={() => handleChange(index)}
                className="flex flex-col items-center justify-center my-12 cursor-pointer"
              >
                <CustomImage
                  src={vehicle.images[0]}
                  alt="vehicle image"
                  className="w-20 h-8"
                />
                {vehicle.name}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-[80%] mx-auto">
          <ImageSlider urls={selectedVehicle?.images} />
        </div>
        <div className="w-[80%] mx-auto mt-12">
          <h1 className="text-lg font-extrabold bg-white text-black">
            ${selectedVehicle.price} <span className="text-sm"> / per day</span>
          </h1>
          <Table className="border">
            <TableBody>
              <TableRow>
                <TableCell className="border font-bold p-1">Model</TableCell>
                <TableCell className="border font-bold p-1">Mark</TableCell>
                <TableCell className="border font-bold p-1">Year</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border  p-1">
                  {selectedVehicle.model}
                </TableCell>
                <TableCell className="border  p-1">
                  {selectedVehicle.Mark}
                </TableCell>
                <TableCell className="border  p-1">
                  {selectedVehicle.Year}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button
            size={'sm'}
            className="w-[45%] mx-auto mt-4 bg-black hover:bg-white text-white hover:text-black border border-white shadow-sm shadow-white"
          >
            BOOK NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopVehicle;
