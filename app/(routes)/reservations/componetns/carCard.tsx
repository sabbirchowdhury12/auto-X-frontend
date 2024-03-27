import CustomImage from '@/components/customImage';
import { Separator } from '@/components/ui/separator';
import { CarFront, Gauge, PersonStanding, Sliders, Star } from 'lucide-react';

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
];
const CarCard = () => {
  return (
    <div className=" ">
      {carData.map(car => (
        <div
          key={car.brand}
          className="w-72 md:w-full shadow-lg p-4 text-sm rounded-lg"
        >
          <div className="flex justify-between gap-4 items-center ">
            <div className="flex gap-2 items-center border-2 p-1 rounded-full">
              <Star />{' '}
              <p>
                {' '}
                <span className="font-bold">{car.rating}</span>(106)
              </p>
            </div>
            {/* <p className="  p-1.5 rounded-full text-center bg-black text-white">
              {car.status}
            </p> */}
            <div className=" flex gap-2 items-center border-2 p-1 rounded-full">
              {' '}
              <PersonStanding />
              <p>
                <span className="font-bold">{car.mileage}</span>m(50 min)
              </p>
            </div>
            {/* <Heart className="ml-14" /> */}
          </div>
          <CustomImage
            src={car.image}
            alt="car image"
            className="w-full h-52 my-4"
          />
          <p className="font-bold  text-gray-600 mb-2">FORD FOCUS</p>
          <div className="flex justify-between items-center ">
            <p className="font-bold text-2xl ">{car.model} </p>
            <p>
              <span className="text-lg font-bold">${car.price} </span>
              <span>/ hour</span>
            </p>
          </div>
          <Separator />
          <div className=" flex items-center justify-between ">
            <p className="flex items-center gap-2">
              {' '}
              <CarFront />
              {car.brand}
            </p>

            <p className="flex items-center gap-2">
              {' '}
              <Sliders /> Manual
            </p>
            <p className="flex items-center gap-2">
              <Gauge /> {car.fuelType}
            </p>
            {/* <p className="flex items-center gap-2">
              <ArrowDownWideNarrow /> {car.vehicleType}
            </p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarCard;
