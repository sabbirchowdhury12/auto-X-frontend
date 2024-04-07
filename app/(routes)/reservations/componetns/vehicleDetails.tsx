/* eslint-disable @typescript-eslint/no-explicit-any */
import MonthlyBookingForm from '@/components/forms/monthlyBookingForm';

const VehicleDetails = ({ selectedCar }: any) => {
  return (
    <>
      <p className="font-bold  text-gray-600 mb-2">{selectedCar?.brand}</p>
      <div className="flex justify-between items-center ">
        <p className="font-bold text-2xl ">{selectedCar?.model} </p>
        <p>
          <span className="text-lg font-bold"> </span>
          <span>{selectedCar?.rentalRate}/ hour</span>
        </p>
      </div>
      <p className="my-5 text-sm"> {selectedCar?.overview}</p>
      <MonthlyBookingForm selectedCar={selectedCar} />
    </>
  );
};

export default VehicleDetails;
