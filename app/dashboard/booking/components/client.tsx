'use client';

import { Heading } from '@/components/heading';
import { DataTable } from '@/components/ui/dataTable';
import { Separator } from '@/components/ui/separator';
import { formatDate } from 'date-fns';
import { Booking, columns } from './columns';

const data = [
  {
    id: '1',
    bookingId: 'BK123456',
    pickUpDate: '2024-02-10',
    pickUpTime: '10:00 AM',
    dropOffDate: '2024-02-15',
    dropOffTime: '12:00 PM',
    pickUpLocation: 'City Center',
    dropOffLocation: 'Suburbs',
    rentType: 'monthly',
    bookingStatus: 'Confirmed',
    createdAt: '2024-02-04T10:00:00Z',
  },
  {
    id: '2',
    bookingId: 'BK123456',
    pickUpDate: '2024-02-10',
    pickUpTime: '10:00 AM',
    dropOffDate: '2024-02-15',
    dropOffTime: '12:00 PM',
    pickUpLocation: 'City Center',
    dropOffLocation: 'Suburbs',
    rentType: 'daily',
    bookingStatus: 'Confirmed',
    createdAt: '2024-02-04T10:00:00Z',
  },
];

export const BookingClient = () => {
  const formattedBookings: Booking[] = data?.map(item => ({
    bookingId: item?.bookingId,
    pickUpDate: item?.pickUpDate,
    pickUpTime: item?.pickUpTime,
    dropOffDate: item?.dropOffDate,
    dropOffTime: item?.dropOffTime,
    pickUpLocation: item?.pickUpLocation,
    dropOffLocation: item?.dropOffLocation,
    rentType: item?.rentType,
    bookingStatus: item?.bookingStatus,
    createdAt: formatDate(new Date(item?.createdAt), 'MMMM do, yyyy'),
  }));

  return (
    <div className="m-4">
      <Heading
        title={`Vehicle (${formattedBookings?.length})`}
        description="Manage your bookings"
      />
      <Separator />
      <div className="p-6 border rounded-md shadow-sm">
        <DataTable
          searchKey="rentType"
          columns={columns}
          data={formattedBookings}
        />
      </div>
    </div>
  );
};
