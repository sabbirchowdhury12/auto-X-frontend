'use client';

import { useGetSingleDriverQuery } from '@/redux/api/driverApi';
import { useParams } from 'next/navigation';
import DriverForm from './components/driverForm';

const Driver = () => {
  const { driverId } = useParams();

  const { data: initialData, isLoading } = useGetSingleDriverQuery(driverId);

  if (isLoading) {
    return null;
  }
  return (
    <div>
      <DriverForm initialData={initialData} />
    </div>
  );
};

export default Driver;
