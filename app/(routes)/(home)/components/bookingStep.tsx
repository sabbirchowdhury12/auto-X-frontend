import CarIcon from '@/components/icons/car';
import { CalendarCheck, MapPin } from 'lucide-react';

const BookingStep = () => {
  return (
    <section className="text-center my-16 md:my-28">
      <h3 className="uppercase text-sm md:text-md font-extrabold opacity-50">
        How it work
      </h3>
      <h2 className="text-2xl lg:text-3xl font-bold mt-4  w-[85%] mx-auto">
        Rent your desired car with following 3 working steps
      </h2>
      <div className="w-full md:w-[80%] lg:w-2/3 mx-auto space-x-4 my-10 space-y-10 md:space-y-0 md:flex justify-between items-center">
        <div className="flex flex-col items-center justify-center space-y-2 mt-2">
          <CalendarCheck className="w-20 h-20 p-6 rounded-lg shadow-xl mb-4 cursor-pointer" />
          <h1 className="text-lg font-bold">Pick-up data/time</h1>
          <p className="text-sm">
            Select your pick up date and time to book your vehicle.
          </p>
        </div>

        <span className="hidden md:block border-t-4 border-black border-dotted w-40 h-20 rotate-[-5deg]" />

        <div className="flex flex-col items-center justify-center space-y-2">
          <MapPin className="w-20 h-20 p-6 bg-black rounded-lg text-white shadow-lg mb-4 cursor-pointer" />
          <h1 className="text-lg font-bold">Pick Your Location</h1>
          <p className="text-sm ">
            Choose your location and find your best vehicle.
          </p>
        </div>

        <span className="hidden md:block border-t-4 border-black border-dotted w-40 h-20 rotate-[5deg]" />

        <div className="flex flex-col items-center justify-center space-y-2 mt-2">
          <CarIcon className="w-20 h-20 p-6 rounded-lg shadow-xl mb-4 cursor-pointer" />
          <h1 className="text-lg font-bold">Book Your Vehicle</h1>
          <p className="text-sm">
            Select your pick up date and time to book your vehicle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingStep;
