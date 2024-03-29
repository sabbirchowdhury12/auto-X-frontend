import CarIcon from '@/components/icons/car';
import { CalendarCheck, MapPin } from 'lucide-react';
import Heading from './heading';

const BookingStep = () => {
  return (
    <section className="text-center ">
      <Heading
        title="How it work"
        sub_title="Rent your car  following 3  steps"
      />

      <div className=" my-10 space-y-10 md:space-y-0 md:flex justify-between items-center">
        <div className="flex flex-col items-center justify-center space-y-2 mt-2">
          <CalendarCheck className="w-20 h-20 p-6 bg-primary  rounded-full   border border-secondary mb-4 cursor-pointer" />
          <h1 className="text-lg font-bold text-secondary">
            Pick-up data/time
          </h1>
          <p className="text-sm ">
            Select your pick up date and time to book your vehicle.
          </p>
        </div>

        <span className="hidden md:block border-t-4 border-primary border-dotted w-40 h-20 rotate-[-5deg]" />

        <div className="flex flex-col items-center justify-center space-y-2">
          <MapPin className="w-20 h-20 p-6 bg-primary  rounded-full text-secondary border border-secondary mb-4 cursor-pointer" />
          <h1 className="text-lg font-bold  text-secondary">
            Pick Your Location
          </h1>
          <p className="text-sm ">
            Choose your location and find your best vehicle.
          </p>
        </div>

        <span className="hidden md:block border-t-4 border-primary border-dotted w-40 h-20 rotate-[5deg]" />

        <div className="flex flex-col items-center justify-center space-y-2 mt-2">
          <CarIcon className="w-20 h-20 p-6 bg-primary  rounded-full   border border-secondary mb-4 cursor-pointer" />
          <h1 className="text-lg font-bold text-secondary">
            Book Your Vehicle
          </h1>
          <p className="text-sm">
            Select your pick up date and time to book your vehicle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingStep;
