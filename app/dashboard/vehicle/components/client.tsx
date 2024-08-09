/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import DashboardHeading from '@/components/dashboardHeading';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/dataTable';
import { Separator } from '@/components/ui/separator';
import { useGetAllDashboardVehicleQuery } from '@/redux/api/vehicleApi';
import { formatDate } from 'date-fns';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import Loading from '../loading';
import { Vehicle, columns } from './columns';

export const VehicleClient = () => {
  const { data: vehicles, isLoading } = useGetAllDashboardVehicleQuery({});
  if (isLoading) {
    return <Loading />;
  }

  const formattedVehicles: Vehicle[] = vehicles?.allVehicles?.map(
    (item: any) => ({
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
    }),
  );

  return (
    <div className="m-4">
      <div className="flex items-center justify-between">
        <DashboardHeading
          title={`Vehicle (${formattedVehicles?.length})`}
          description="Manage your vehicles"
        />
        <Link href={`/dashboard/vehicle/new`}>
          <Button size={'sm'}>
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </Link>
      </div>
      <Separator />
      <div className="card  flex flex-col md:flex-row justify-between text-center gap-6">
        <div className=" w-full border shadow-lg pb-5">
          <p className="bg-secondary text-white font-semibold mb-4 p-2">
            {' '}
            Total car
          </p>
          {vehicles?.totalVehicle}
        </div>
        <div className=" w-full border shadow-lg">
          <p className="bg-secondary text-white font-semibold mb-4 p-2">
            {' '}
            Available car
          </p>
          {vehicles?.availeVehicle}
        </div>
        <div className=" w-full border shadow-lg">
          <p className="bg-secondary text-white font-semibold mb-4 p-2">
            {' '}
            Reservation car
          </p>
          {vehicles?.resreveVehicle}
        </div>
      </div>

      <div className="p-6 border rounded-md shadow mt-8 bg-white">
        <DataTable
          searchKey="model"
          columns={columns}
          data={formattedVehicles}
        />
      </div>
    </div>
  );
};
