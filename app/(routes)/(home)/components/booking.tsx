import DailyBookingForm from '@/components/forms/dailyBookingForm';
import MonthlyBookingForm from '@/components/forms/monthlyBookingForm';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarCheck, CalendarDays } from 'lucide-react';

const BookingPage = () => {
  return (
    <Tabs defaultValue="daily" className="">
      <TabsList>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue
              placeholder={
                <span className="flex justify-between items-center">
                  <CalendarCheck className="h-4 w-4 mx-2" /> Daily
                </span>
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <TabsTrigger
                value="daily"
                className="flex items-center justify-center gap-2"
              >
                <SelectItem value="daily">
                  <div className="flex items-center justify-end gap-2 pl-2 w-full">
                    <CalendarCheck className="h-4 w-4" />
                    Daily
                  </div>
                </SelectItem>
              </TabsTrigger>

              <TabsTrigger
                value="monthly"
                className="flex w-full items-center justify-center gap-2"
              >
                <SelectItem value="monthly">
                  <div className="flex items-center justify-end gap-2 pl-2 w-full">
                    <CalendarDays className="h-4 w-4" />
                    Monthly
                  </div>
                </SelectItem>
              </TabsTrigger>
            </SelectGroup>
          </SelectContent>
        </Select>
      </TabsList>

      <TabsContent value="daily">
        <DailyBookingForm />
      </TabsContent>

      <TabsContent value="monthly">
        <MonthlyBookingForm />
      </TabsContent>
    </Tabs>
  );
};

export default BookingPage;
