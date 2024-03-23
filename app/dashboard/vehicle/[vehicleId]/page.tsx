'use client';
import { useGetSingleVehicleQuery } from '@/redux/api/vehicleApi';
import { useParams } from 'next/navigation';
import VehicleForm from './components/vehicleForm';

const Vehicle = () => {
  const { vehicleId } = useParams();
  const { data: initialData, isLoading } = useGetSingleVehicleQuery(vehicleId);

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <VehicleForm initialData={initialData} />
    </div>
  );
};

export default Vehicle;
