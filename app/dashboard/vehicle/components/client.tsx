/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Heading } from '@/components/heading';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/dataTable';
import { Separator } from '@/components/ui/separator';
import { formatDate } from 'date-fns';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { Vehicle, columns } from './columns';

const data = [
  {
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
  },
  {
    id: '02',
    vehicleId: 'DEF456',
    model: 'Honda Civic',
    mileage: 3000.8,
    color: 'Red',
    images: [
      'https://duruthemes.com/demo/html/renax/light/img/slider/3.jpg',
      'https://duruthemes.com/demo/html/renax/light/img/slider/3.jpg',
    ],
    overview: 'This vehicle is in excellent condition.',
    basePrice: 18000,
    fuelType: 'Diesel',
    passengerCapacity: 4,
    location: 'Los Angeles',
    plateNo: 'ABC789',
    chassisNo: '0987654321',
    status: 'Available',
    owner: 'Jane Smith',
    vehicleType: 'Sedan',
    brand: 'Honda',
    driverId: '2',
    createdAt: '2024-02-04T10:00:00Z',
    updatedAt: '2024-02-04T15:30:00Z',
  },
];

export const VehicleClient = () => {
  // // const { data, isLoading } = useGetAllVehicleQuery({});
  // if (isLoading) {
  //   return <Loading />;
  // }
  const formattedVehicles: Vehicle[] = data.map((item: any) => ({
    id: item.id,
    model: item.model,
    mileage: item.mileage,
    color: item.color,
    images: item.images[0],
    overview: item.overview,
    basePrice: item.basePrice,
    fuelType: item.fuelType,
    passengerCapacity: item.passengerCapacity,
    location: item.location,
    plateNo: item.plateNo,
    chassisNo: item.chassisNo,
    status: item.status,
    owner: item.owner,
    vehicleType: item.vehicleType,
    brand: item.brand,
    createdAt: formatDate(new Date(item?.createdAt), 'MMMM do, yyyy'),
  }));

  return (
    <div className="m-4">
      <div className="flex items-center justify-between">
        <Heading
          title={`Vehicle (${formattedVehicles?.length})`}
          description="Manage your vehicles"
        />
        <Link href={`/dashboard/vehicle/new`}>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </Link>
      </div>
      <Separator />
      <div className="card  flex flex-col md:flex-row justify-between text-white text-center gap-6">
        <div className="bg-black w-full p-10 rounded">Total car</div>
        <div className="bg-black w-full p-10 rounded">Total car</div>
        <div className="bg-black w-full p-10 rounded">Total car</div>
      </div>

      <div className="p-6 border rounded-md shadow mt-8">
        <DataTable
          searchKey="model"
          columns={columns}
          data={formattedVehicles}
        />
      </div>
    </div>
  );
};
