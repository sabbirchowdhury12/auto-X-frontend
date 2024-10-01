'use client';

import CustomImage from '@/components/customImage';
import DashboardHeading from '@/components/dashboardHeading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useGetSingleVehicleQuery } from '@/redux/api/vehicleApi';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

const VehicleDetailsClient = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleVehicleQuery(id);

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <DashboardHeading
          title="Vehicles Details"
          description={`${data?.brand} - ${data?.model}`}
        />
        <Link href={`/dashboard/vehicle/${data?.id}`}>
          <Button size={'lg'}>Edit</Button>
        </Link>
      </div>
      <Separator />
      <div className="main xl:grid grid-cols-3 gap-4">
        <div className="left col-span-2 mb-4">
          <div className="car flex flex-col md:flex-row justify-between p-5 shadow border gap-8">
            <div className="flex-1">
              <CustomImage
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
                <p>Plate No</p>
                <p>Status</p>
              </div>
              <div className="flex flex-col justify-around ">
                <p>{data?.brand}</p>
                <p>{data?.model}</p>
                <p>{data?.basePrice}</p>
                <p>{data?.plateNo}</p>
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

export default VehicleDetailsClient;
