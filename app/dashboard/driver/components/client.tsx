/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Heading } from '@/components/heading';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/dataTable';
import { Separator } from '@/components/ui/separator';
import { useGetAllDriverQuery } from '@/redux/api/driverApi';
import { formatDate } from 'date-fns';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Loading from '../loading';
import { Driver, columns } from './columns';

// const data = [
//   {
//     id: '1',
//     driverId: 'D001',
//     licenseNo: 'DL123456',
//     licenseExpire: '2024-12-31T23:59:59Z',
//     nidNo: '1234567890123',
//     status: 'Available',
//     userId: '2',
//     createdAt: '2024-02-05T12:34:56Z',
//     updatedAt: '2024-02-05T12:34:56Z',
//   },
//   {
//     id: '2',
//     driverId: 'D002',
//     licenseNo: 'DL654321',
//     licenseExpire: '2025-06-30T23:59:59Z',
//     nidNo: '9876543210987',
//     status: 'Unavailable',
//     userId: '3',
//     createdAt: '2024-02-06T09:12:34Z',
//     updatedAt: '2024-02-06T09:12:34Z',
//   },
//   {
//     id: '1',
//     driverId: 'D001',
//     licenseNo: 'DL123456',
//     licenseExpire: '2024-12-31T23:59:59Z',
//     nidNo: '1234567890123',
//     status: 'Available',
//     userId: '2',
//     createdAt: '2024-02-05T12:34:56Z',
//     updatedAt: '2024-02-05T12:34:56Z',
//   },
//   {
//     id: '2',
//     driverId: 'D002',
//     licenseNo: 'DL654321',
//     licenseExpire: '2025-06-30T23:59:59Z',
//     nidNo: '9876543210987',
//     status: 'Unavailable',
//     userId: '3',
//     createdAt: '2024-02-06T09:12:34Z',
//     updatedAt: '2024-02-06T09:12:34Z',
//   },
//   {
//     id: '1',
//     driverId: 'D001',
//     licenseNo: 'DL123456',
//     licenseExpire: '2024-12-31T23:59:59Z',
//     nidNo: '1234567890123',
//     status: 'Available',
//     userId: '2',
//     createdAt: '2024-02-05T12:34:56Z',
//     updatedAt: '2024-02-05T12:34:56Z',
//   },
//   {
//     id: '2',
//     driverId: 'D002',
//     licenseNo: 'DL654321',
//     licenseExpire: '2025-06-30T23:59:59Z',
//     nidNo: '9876543210987',
//     status: 'Unavailable',
//     userId: '3',
//     createdAt: '2024-02-06T09:12:34Z',
//     updatedAt: '2024-02-06T09:12:34Z',
//   },
//   {
//     id: '1',
//     driverId: 'D001',
//     licenseNo: 'DL123456',
//     licenseExpire: '2024-12-31T23:59:59Z',
//     nidNo: '1234567890123',
//     status: 'Available',
//     userId: '2',
//     createdAt: '2024-02-05T12:34:56Z',
//     updatedAt: '2024-02-05T12:34:56Z',
//   },
//   {
//     id: '2',
//     driverId: 'D002',
//     licenseNo: 'DL654321',
//     licenseExpire: '2025-06-30T23:59:59Z',
//     nidNo: '9876543210987',
//     status: 'Unavailable',
//     userId: '3',
//     createdAt: '2024-02-06T09:12:34Z',
//     updatedAt: '2024-02-06T09:12:34Z',
//   },
// ];

export const DriverClient = () => {
  const router = useRouter();

  const { data, isLoading } = useGetAllDriverQuery({});

  if (isLoading) {
    return <Loading />;
  }

  const formattedDrivers: Driver[] = data?.map((item: any) => ({
    id: item.id,
    // email: item?.user?.email,
    driverId: item.driverId,
    licenseNo: item.licenseNo,
    licenseExpire: formatDate(new Date(item?.licenseExpire), 'MMMM do, yyyy'),
    nidNo: item.nidNo,
    status: item.status,
  }));

  return (
    <div className="m-4">
      <div className="flex items-center justify-between">
        <Heading
          title={`Driver (${formattedDrivers?.length})`}
          description="Manage your drivers"
        />
        <Button onClick={() => router.push(`/dashboard/driver/new`)}>
          <Plus className="mr-2 h-4 w-4 " /> Add New
        </Button>
      </div>
      <Separator />
      <div className="p-6 border rounded-md shadow-sm">
        <DataTable
          searchKey="status"
          columns={columns}
          data={formattedDrivers}
        />
      </div>
    </div>
  );
};
