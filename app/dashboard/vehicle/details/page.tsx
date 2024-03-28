/* eslint-disable @next/next/no-img-element */
'use client';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const data = {
  id: '01',
  vehicleId: 'ABC123',
  model: 'Toyota Corolla',
  mileage: 5000.5,
  color: 'Blue',
  images: [
    'https://duruthemes.com/demo/html/renax/light/img/slider/3.jpg',
    'https://duruthemes.com/demo/html/renax/light/img/slider/3.jpg',
  ],
  overview: 'This is a well-maintained vehicle.',
  basePrice: 20000,
  fuelType: 'Petrol',
  passengerCapacity: 5,
  location: 'New York',
  plateNo: 'XYZ456',
  chassisNo: '1234567890',
  status: 'Available',
  owner: 'John Doe',
  vehicleType: 'Sedan',
  brand: 'Toyota',
  driverId: '1',
  createdAt: '2024-02-05T12:00:00Z',
  updatedAt: '2024-02-05T12:00:00Z',
  numberPlate: 'sdgfs68486',
};

const VehicleDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2>
          {data?.brand} - {data?.model}
        </h2>
        <Button>Edit</Button>
      </div>
      <Separator />

      <div className="main xl:grid grid-cols-3 gap-4">
        <div className="left col-span-2 mb-4">
          <div className="car flex flex-col md:flex-row justify-between p-5 shadow border gap-8">
            <div className="flex-1">
              <img
                src="https://duruthemes.com/demo/html/renax/light/img/slider/3.jpg"
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className="details flex-1 grid grid-cols-2   ">
              <div className="flex flex-col justify-around text-gray-400">
                <p>Brand</p>
                <p>Model</p>
                <p>Year</p>
                <p>License Plate</p>
                <p>Status</p>
              </div>
              <div className="flex flex-col justify-around ">
                <p>{data?.brand}</p>
                <p>{data?.model}</p>
                <p>{data?.basePrice}</p>
                <p>{data?.numberPlate}</p>
                <p>{data?.status}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 rounded-lg mt-4">
            <h2 className="p-20 w-full bg-black text-white rounded">
              Total Earning
            </h2>
            <h2 className="p-20 w-full bg-black text-white rounded">
              Total Consumption{' '}
            </h2>
          </div>
        </div>
        <div className="map h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d931914.4191768537!2d90.08815640781252!3d24.161535708205026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1711552657077!5m2!1sen!2sbd"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 xl:h-full w-full block p-4 bg-white shadow border"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
