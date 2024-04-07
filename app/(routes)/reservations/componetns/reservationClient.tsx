/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Banner from '@/components/banner';
import Container from '@/components/container';
import { useGetAllVehicleQuery } from '@/redux/api/vehicleApi';
import { useState } from 'react';
import CarCard from './carCard';
import ImageSlider from './carSlider';
import Filter from './filter';
import VehicleDetails from './vehicleDetails';

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

  return (
    <>
      <Banner />
      <Container>
        <div className="main grid lg:grid-cols-2 grid-cols-1  gap-1 my-20">
          <div className="left-side grid grid-cols-1 md:grid-cols-2 gap-1">
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
            <div className="car-result-site  overflow-x-scroll no-scroll md:overflow-x-hidden md:overflow-y-scroll flex flex-row md:flex-col md:h-screen gap-4 my-8 md:my-0">
              {data?.length ? (
                data?.map((car: any, ind: number) => (
                  <CarCard
                    key={ind}
                    car={car}
                    setSelectedCar={setSelectedCar}
                  />
                ))
              ) : (
                <p>NO Result Found</p>
              )}
            </div>
          </div>

          {/* -----car details --------- */}
          <div className="right-side flex-1 px-2">
            {selectedCar ? (
              <>
                {' '}
                <ImageSlider selectedCar={selectedCar} />
                <VehicleDetails selectedCar={selectedCar} />{' '}
              </>
            ) : (
              <p>select a car</p>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ReservationClient;
