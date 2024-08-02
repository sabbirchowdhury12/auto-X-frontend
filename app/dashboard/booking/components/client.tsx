'use client';

import DashboardHeading from '@/components/dashboardHeading';
import { DataTable } from '@/components/ui/dataTable';
import { Separator } from '@/components/ui/separator';
import { useGetAllBookingQuery } from '@/redux/api/bookingApi';
import { formatDate } from 'date-fns';
import Loading from '../loading';
import { Booking, columns } from './columns';

export const BookingClient = () => {
  const { data: booking, isLoading } = useGetAllBookingQuery({});

  if (isLoading) {
    return <Loading />;
  }

  const formattedBookings: Booking[] = booking?.map((item: any) => ({
    id: item?.id,
    bookingId: item?.bookingId,
    pickUpDateTime: formatDate(new Date(item?.pickUpDateTime), 'MMMM do, yyyy'),
    pickUpTime: item?.pickUpTime,
    returnDateTime: formatDate(new Date(item?.returnDateTime), 'MMMM do, yyyy'),
    pickUpLocation: item?.pickUpLocation,
    dropOffLocation: item?.dropOffLocation,
    bookingStatus: item?.bookingStatus,
    paymentStatus: item?.paymentStatus,
  }));

  return (
    <div className="m-4">
      <DashboardHeading
        title={`Vehicle (${formattedBookings?.length})`}
        description="Manage your bookings"
      />
      <Separator />
      <div className="p-6 border rounded-md shadow-sm">
        <DataTable
          searchKey="bookingId"
          columns={columns}
          data={formattedBookings}
        />
      </div>
    </div>
  );
};
