'use client';

import Sparkchart from './charts';
import BarChart from './charts/barChart';
import LineChart from './charts/lineChart';

import PieCharts from './charts/pieChart';
import AreaCharts from './charts/areaCharts';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { authKey } from '@/constants/authKey';
import { USER_ROLE } from '@/constants/role';

const DashboardClient = () => {
  const router = useRouter();
  useEffect(() => {
    const userString = localStorage.getItem(authKey);
    if (!userString) {
      router.push('/login');
    } else {
      try {
        const userData = JSON.parse(userString);

        if (userData.role === USER_ROLE.CUSTOMER) {
          router.push('/dashboard/booking');
        }
      } catch (error) {
        router.push('/login');
      }
    }
  }, [router]);

  return (
    <div className="m-4 grid gap-4">
      <div className="flex flex-col md:flex-row  justify-between  gap-4 text-center">
        <div className="bg-white shadow w-full rounded">
          <div className="p-4 flex justify-between items-center">
            <p className="flex flex-col justify-start items-start ">
              Total Deposit <span className="font-bold text-2xl">$1200.00</span>
            </p>
          </div>
          <Sparkchart color={'red'} />
        </div>
        <div className="bg-white shadow w-full">
          <div className="p-4 flex justify-between items-center">
            <p className="flex flex-col justify-start items-start ">
              Total Deposit <span className="font-bold text-2xl">$1200.00</span>
            </p>
          </div>
          <Sparkchart color={'gray'} />
        </div>
        <div className="bg-white shadow w-full">
          <div className="p-4 flex justify-between items-center">
            <p className="flex flex-col justify-start items-start ">
              Total Deposit <span className="font-bold text-2xl">$1200.00</span>
            </p>
          </div>
          <Sparkchart color={'blue'} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 bg-white">
        <PieCharts />
        <AreaCharts />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        <div className=" border shadow-sm rounded-md p-5">
          <BarChart />
        </div>
        <div className="border shadow-sm rounded-md p-5">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;

{
  /* <Card>
<CardHeader className="flex flex-row items-center justify-center gap-2  space-y-0 pb-2">
  <CardTitle className="text-sm font-medium">Rents</CardTitle>
  <CreditCard className="hidden md:block h-4 w-4 text-muted-foreground" />
</CardHeader>
<CardContent>
  <div className="text-sm md:text-2xl font-bold">+50</div>
</CardContent>
</Card>
<Card>
<CardHeader className="flex flex-row items-center justify-center gap-2  space-y-0 pb-2">
  <CardTitle className="text-sm font-medium">Rent Running</CardTitle>
  <Package className="hidden md:block h-4 w-4 text-muted-foreground" />
</CardHeader>
<CardContent>
  <div className="text-sm md:text-2xl font-bold">35</div>
</CardContent>
</Card> */
}
