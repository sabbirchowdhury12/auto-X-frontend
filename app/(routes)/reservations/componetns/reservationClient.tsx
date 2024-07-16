/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Banner from '@/components/banner';
import Container from '@/components/container';
import Heading from '@/components/heading';
import { useGetAllVehicleQuery } from '@/redux/api/vehicleApi';
import { useState } from 'react';
import Loading from '../loading';
import CarCard from './carCard';
import Filter from './filter';

const ReservationClient = () => {
  const [searchValue, setSearchValue] = useState('');
  const [color, setColor] = useState('Blue');
  const [status, setStatus] = useState('Available');
  const [brand, setBrand] = useState('Toyota');
  const [carType, setCarType] = useState('XL');
  const [fuelType, setFuelType] = useState('LPG');
  const [selectedCar, setSelectedCar] = useState(null);

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const brandValue = capitalizeFirstLetter(brand);

  const { data, isLoading } = useGetAllVehicleQuery({
    searchValue,
    brandValue,
    fuelType,
    carType,
    status,
    color,
  });

  if (isLoading || data?.length < 0) {
    return <Loading />;
  }

  return (
    <>
      <Banner />
      <Container>
        <div className="main-side grid grid-cols-1 md:grid-cols-3 gap-1 my-20">
          {/* -----filter and search part --------- */}
          <Filter
            setSearchValue={setSearchValue}
            setColor={setColor}
            setBrand={setBrand}
            setCarType={setCarType}
            setFuelType={setFuelType}
            color={color}
            brand={brand}
            carType={carType}
            fuelType={fuelType}
          />

          {/* -----filterable and searchable car result part --------- */}
          <div className="col-span-2 car-result-site  overflow-x-scroll no-scroll md:overflow-x-hidden md:overflow-y-scroll flex flex-col md:h-screen gap-4 my-8 md:my-0">
            <Heading title="" sub_title="Car List" />
            {data?.length ? (
              data?.map((car: any, ind: number) => (
                <CarCard key={ind} car={car} setSelectedCar={setSelectedCar} />
              ))
            ) : (
              <p className="text-center">NO Result Found</p>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ReservationClient;
{
  /* -----car details --------- */
}
{
  /* <div className="right-side flex-1 px-2">
            {selectedCar ? (
              <>
                {' '}
                <ImageSlider selectedCar={selectedCar} />
                <VehicleDetails selectedCar={selectedCar} />{' '}
              </>
            ) : (
              <p className="text-center">Select a car</p>
            )}
          </div> */
}
