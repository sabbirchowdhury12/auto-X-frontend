'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, DollarSign, Package } from 'lucide-react';
import BarChart from './charts/barChart';
import LineChart from './charts/lineChart';

const DashboardClient = () => {
  return (
    <div className="m-4 grid gap-4">
      <div className="flex flex-col md:flex-row  justify-between  gap-4 text-center">
        <Card>
          <CardHeader className="flex flex-row items-center justify-center gap-2  space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Profit</CardTitle>
            <DollarSign className="hidden md:block h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm md:text-2xl font-bold">2000</div>
          </CardContent>
        </Card>
        <Card>
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
        </Card>
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
