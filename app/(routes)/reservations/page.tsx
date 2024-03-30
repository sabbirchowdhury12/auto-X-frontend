'use client';

import Banner from '@/components/banner';
import Container from '@/components/container';
import Combobox from '@/components/ui/combobox';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Search } from 'lucide-react';
import { SetStateAction, useState } from 'react';
import AccordinCheckBox from './componetns/accordinCheckBox';
import CarCard from './componetns/carCard';
import { Slider } from './componetns/priceRange';
import CarSlider from './componetns/carSlider';
import MonthlyBookingForm from '@/components/forms/monthlyBookingForm';

const rentTypeOption = ['Hourly', 'Daily', 'Weekly', 'Monthly'];
const carBrands = [
  {
    value: 'Toyota',
    label: 'Toyota',
  },
  {
    value: 'Hyundai',
    label: 'Hyundai',
  },
  {
    value: 'Audi',
    label: 'Audi',
  },
  {
    value: 'Proton',
    label: 'Proton',
  },
  {
    value: 'Mitsubishi',
    label: 'Mitsubishi',
  },
  {
    value: 'BMW',
    label: 'BMW',
  },
  {
    value: 'Suzuki',
    label: 'Suzuki',
  },
  {
    value: 'Subaru',
    label: 'Subaru',
  },
  {
    value: 'Nissan',
    label: 'Nissan',
  },
  {
    value: 'Mercedes',
    label: 'Mercedes',
  },
  {
    value: 'Mazda',
    label: 'Mazda',
  },
  {
    value: 'Honda',
    label: 'Honda',
  },
];

const carTypes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
const fuelTypes = ['LPG', 'CNG', 'Petrol', 'Diesel', 'Gasoline', 'Kerosene'];

const carDetails = {
  rating: 4.8,
  status: 'available now',
  minitue: '120m',
  model: ' 15 Eco Blue ',
  price: 24.56,
  mileage: 545,
  fuelType: 'Diesel',
  location: 'Bangladesh',
  brand: 'Audi 215',
  image: [
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww',
  ],

  vehicleType: 'XL',
  passengerCapacity: 5,
};
const carData = [
  {
    rating: 4.8,
    status: 'available now',
    minitue: '120m',
    model: ' 15 Eco Blue ',
    price: 24.56,
    mileage: 545,
    fuelType: 'Diesel',
    location: 'Bangladesh',
    brand: 'Audi 215',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww',

    vehicleType: 'XL',
    passengerCapacity: 5,
  },
  {
    rating: 4.8,
    status: 'available now',
    minitue: '120m',
    model: ' 15 Eco Blue ',
    price: 24.56,
    mileage: 545,
    fuelType: 'Diesel',
    location: 'Bangladesh',
    brand: 'Audi 215',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww',
    vehicleType: 'XL',
    passengerCapacity: 5,
  },
  {
    rating: 4.8,
    status: 'available now',
    minitue: '120m',
    model: ' 15 Eco Blue ',
    price: 24.56,
    mileage: 545,
    fuelType: 'Diesel',
    location: 'Bangladesh',
    brand: 'Audi 215',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww',
    vehicleType: 'XL',
    passengerCapacity: 5,
  },
  {
    rating: 4.8,
    status: 'available now',
    minitue: '120m',
    model: ' 15 Eco Blue ',
    price: 24.56,
    mileage: 545,
    fuelType: 'Diesel',
    location: 'Bangladesh',
    brand: 'Audi 215',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww',
    vehicleType: 'XL',
    passengerCapacity: 5,
  },
  {
    rating: 4.8,
    status: 'available now',
    minitue: '120m',
    model: ' 15 Eco Blue ',
    price: 24.56,
    mileage: 545,
    fuelType: 'Diesel',
    location: 'Bangladesh',
    brand: 'Audi 215',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww',
    vehicleType: 'XL',
    passengerCapacity: 5,
  },
  {
    rating: 4.8,
    status: 'available now',
    minitue: '120m',
    model: ' 15 Eco Blue ',
    price: 24.56,
    mileage: 545,
    fuelType: 'Diesel',
    location: 'Bangladesh',
    brand: 'Audi 215',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww',
    vehicleType: 'XL',
    passengerCapacity: 5,
  },
];
const ReservationsPage = () => {
  const [rentalType, setRentalType] = useState('');
  const [status, setStatus] = useState(false);
  const [brandValue, setBrandValue] = useState('');
  const [carType, setCarType] = useState('');
  const [fuelType, setFuelType] = useState('');

  const [range, setRange] = useState([0, 4000]);

  const handleRangeChange = (value: SetStateAction<number[]>) => {
    setRange(value);
  };

  const handleFromInputChange = (e: { target: { value: string } }) => {
    const newValue = parseInt(e.target.value);
    setRange([newValue, range[1]]);
  };

  const handleToInputChange = (e: { target: { value: string } }) => {
    let newValue = parseInt(e.target.value);
    if (newValue < range[0]) {
      newValue = range[0];
    }
    setRange([range[0], newValue]);
  };
  return (
    <div className="">
      <Banner />
      <Container>
        <div className="main grid lg:grid-cols-2 grid-cols-1  gap-1 my-20">
          <div className="left-side grid grid-cols-1 md:grid-cols-2 gap-1">
            <div className=" filter-side flex flex-col  gap-4 border-r pr-2">
              <h3 className="text-xl font-bold uppercase text-secondary">
                Filter By:
              </h3>
              <div className="relative my-4">
                <Search className="absolute top-0 bottom-0 my-auto text-gray-500 left-3" />
                <Input type="text" placeholder="Search" className=" pr-4" />
              </div>

              <div className="pb-2">
                <h3 className="font-bold mb-2">Rental Type </h3>
                <div className="flex gap-2 flex-wrap justify-between">
                  {rentTypeOption.map(option => (
                    <div
                      onClick={() => setRentalType(option)}
                      className={`flex text-secondary   border-2 border-primary px-2 py-1 rounded  font-bold text-sm cursor-pointer ${rentalType === option ? 'bg-primary ' : 'text-gray-700'}`}
                      key={option}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <div className="flex justify-between items-center pb-3">
                <p className="font-bold text-gray-800">Avaible now only</p>
                <Switch onClick={() => setStatus(!status)} />
              </div>
              <Separator />
              <div className=" py-4">
                <h3 className="font-bold mb-4"> Price Range / Hour</h3>
                <Slider
                  defaultValue={[0, 2500]}
                  max={5000}
                  min={0}
                  step={1}
                  value={range}
                  onValueChange={handleRangeChange}
                  formatLabel={value => `$${value} `}
                  minStepsBetweenThumbs={0}
                />
                <div className="flex justify-between gap-4 mt-2">
                  <div className="relative my-4 flex items-center">
                    <p className="absolute top-2 bottom-0 my-auto font-bold  text-gray-500 left-3">
                      From :{' '}
                    </p>
                    <Input
                      type="number"
                      placeholder="000"
                      value={range[0] ? range[0] : undefined}
                      className="pl-16 pr-4"
                      onChange={handleFromInputChange}
                      max="5000"
                    />
                  </div>
                  <div className="relative my-4 flex items-center">
                    <p className="absolute top-2 bottom-0 my-auto font-bold  text-gray-500 left-3">
                      To :{' '}
                    </p>
                    <Input
                      type="number"
                      placeholder="000"
                      value={range[1] ? range[1] : undefined}
                      className="pl-16 pr-4"
                      onChange={handleToInputChange}
                      max={4}
                    />
                  </div>
                </div>
              </div>
              <Separator />

              <div className="my-4">
                <h3 className="font-bold mb-2">Vehicle Brand</h3>
                <Combobox
                  data={carBrands}
                  value={brandValue}
                  setValue={setBrandValue}
                />
              </div>

              <AccordinCheckBox
                data={carTypes}
                title={'Vehicle  Type'}
                value={carType}
                setValue={setCarType}
              />

              <AccordinCheckBox
                data={fuelTypes}
                title={'Fuel Type'}
                value={fuelType}
                setValue={setFuelType}
              />
            </div>

            <div className="car-result-site  overflow-x-scroll no-scroll md:overflow-x-hidden md:overflow-y-scroll flex flex-row md:flex-col md:h-screen gap-4 my-8 md:my-0">
              {carData.map((car, ind) => (
                <CarCard key={ind} />
              ))}
            </div>
          </div>

          <div className="right-side flex-1 ">
            <CarSlider />
            <p className="font-bold  text-gray-600 mb-2">FORD FOCUS</p>
            <div className="flex justify-between items-center ">
              <p className="font-bold text-2xl ">{carDetails.model} </p>
              <p>
                <span className="text-lg font-bold">${carDetails.price} </span>
                <span>/ hour</span>
              </p>
            </div>
            <MonthlyBookingForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReservationsPage;
