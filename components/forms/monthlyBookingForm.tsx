/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { addDays, format } from 'date-fns';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import Loader from '@/components/loader';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { times } from '@/constants/timeList';
import { cn } from '@/lib/utils';
import { useCreateBookingMutation } from '@/redux/api/bookingApi';
import { useGetAvailableVehicleQuery } from '@/redux/api/vehicleApi';
import { getClientUserInfo } from '@/services/auth.service';
import { CalendarIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Link from 'next/link';

const formSchema = z.object({
  pickUpLocation: z.string({ required_error: '' }),
  pickUpTime: z.string({ required_error: '' }),
  dropOffLocation: z.string({ required_error: '' }),
  vehicle: z.string({ required_error: '' }).optional(),
  pickUpDate: z
    .date({ required_error: '' })
    .refine(
      data => data > addDays(new Date(), -1),
      'Date must be in the future',
    ),
  dropOffDate: z
    .date({ required_error: '' })
    .refine(
      data => data > addDays(new Date(), -1),
      'Date must be in the future',
    ),
});

type monthlyBookingFormValues = z.infer<typeof formSchema>;

const MonthlyBookingForm = ({ selectedCar }: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const user = getClientUserInfo();

  const [createBooking] = useCreateBookingMutation();
  const { data: vehicles } = useGetAvailableVehicleQuery({});

  const form = useForm<monthlyBookingFormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: monthlyBookingFormValues) => {
    if (!user.id) {
      router.push('/login');
    }
    setLoading(true);

    const bookingData = {
      pickUpDateTime: new Date(data.pickUpDate).toISOString(),
      returnDateTime: new Date(data.dropOffDate).toISOString(),
      pickUpLocation: data.pickUpLocation,
      dropOffLocation: data.dropOffLocation,
      pickUpTime: data.pickUpTime,
      vehicleId: selectedCar ? selectedCar.id : data.vehicle,
      userId: user?.id,
    };

    const res: any = await createBooking(bookingData);

    if (res?.data?.id) {
      form.reset();
      router.push(`/`);
      toast.success('Vehicle booked successfully');
    } else if (res?.error) {
      toast.error(res?.error?.message);
    }

    setLoading(false);
  };

  return (
    <div className="bg-white rounded-md  mt-4 p-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full  py-2 md:h-full overflow-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="pickUpLocation"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={loading}
                      {...field}
                      placeholder="Pick up location"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dropOffLocation"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={loading}
                      {...field}
                      placeholder="Drop of location"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <FormField
              control={form.control}
              name="pickUpDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick up date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={date => date < new Date('1900-01-01')}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* retuen------------ */}
            <FormField
              control={form.control}
              name="dropOffDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Return date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={date => date < new Date('1900-01-01')}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* {time} */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <FormField
              control={form.control}
              name="pickUpTime"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {times?.map(t => (
                        <SelectItem key={t.id} value={t.time}>
                          {t.time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            {selectedCar ? (
              <FormField
                control={form.control}
                name="vehicle"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={selectedCar}
                        {...field}
                        defaultValue={selectedCar?.model}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : (
              <FormField
                control={form.control}
                name="vehicle"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      disabled={loading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            defaultValue={field.value}
                            placeholder="Select a vehicle"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {vehicles?.map((vehicle: any) => (
                          <SelectItem key={vehicle.id} value={vehicle.id}>
                            {vehicle.model}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
          <div className="flex justify-end mt-6">
            {user && user?.id ? (
              <Button
                disabled={loading}
                className="w-full md:w-[27%] font-bold"
                type="submit"
              >
                {loading ? (
                  <>
                    Book Now
                    <Loader />
                  </>
                ) : (
                  <>Book Now</>
                )}
              </Button>
            ) : (
              <Link href={'/login'} className="block w-full text-right">
                <Button
                  disabled={loading}
                  className="w-full md:w-[27%]  font-bold"
                  type="submit"
                >
                  Login
                </Button>
              </Link>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default MonthlyBookingForm;
