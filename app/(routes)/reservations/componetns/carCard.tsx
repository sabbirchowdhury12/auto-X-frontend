/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomImage from '@/components/customImage';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { CarFront, Gauge, PersonStanding, Sliders, Star } from 'lucide-react';
import ImageSlider from './carSlider';
import VehicleDetails from './vehicleDetails';
const CarCard = ({ car, setSelectedCar }: any) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className=" md:w-full shadow-lg p-4 text-sm  rounded-lg border"
          onClick={() => setSelectedCar(car)}
        >
          <div className="flex justify-between gap-4 items-center ">
            <div className="flex gap-2 items-center  p-1 rounded-full bg-primary">
              <Star />{' '}
              <p>
                {' '}
                <span className="font-bold">{car?.status}</span>
              </p>
            </div>
            {/* <p className="  p-1.5 rounded-full text-center bg-black text-white">
              {car.status}
            </p> */}
            <div className=" flex gap-2 items-center border-2 p-1 rounded-full">
              {' '}
              <PersonStanding />
              <p>
                <span className="font-bold">{car.mileage}</span>m(60 min)
              </p>
            </div>
            {/* <Heart className="ml-14" /> */}
          </div>
          <CustomImage
            src={car.images[0]}
            alt="car image"
            className="w-full h-80 my-4"
          />
          <p className="font-bold  text-secondary opacity-80 mb-2">
            {car?.brand}
          </p>
          <div className="flex justify-between items-center ">
            <p className="font-bold text-2xl text-secondary">{car?.model} </p>
            <p>
              <span className="text-lg font-bold ">${car?.rentalRate} </span>
              <span className="text-primary">/ hour</span>
            </p>
          </div>
          <Separator />
          <div className=" flex items-center justify-between ">
            <p className="flex items-center gap-2">
              {' '}
              <CarFront className="text-primary" />
              {car?.vehicleType}
            </p>

            <p className="flex items-center gap-2">
              {' '}
              <Sliders className="text-primary" /> Manual
            </p>
            <p className="flex items-center gap-2">
              <Gauge className="text-primary" /> {car.fuelType}
            </p>
            {/* <p className="flex items-center gap-2">
              <ArrowDownWideNarrow /> {car.vehicleType}
            </p> */}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <ImageSlider selectedCar={car} />
            <VehicleDetails selectedCar={car} />{' '}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CarCard;
