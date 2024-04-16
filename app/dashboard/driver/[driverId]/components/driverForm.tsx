/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import DashboardHeading from '@/components/dashboardHeading';
import ImageUpload from '@/components/imageUpload';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import {
  useCreateDriverMutation,
  useUpdateDriverMutation,
} from '@/redux/api/driverApi';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

// const initialData = null;
//dummy data
// const initialData =  {
//   licenseNo: 'DL123456',
//   licenseExpire: '2025-05-15T00:00:00Z',
//   nidNo: '1234567890',
//   status: 'Accident',
//   userId: 'U123',
//   createdAt: '2024-02-04T12:00:00Z',
//   updatedAt: '2024-02-04T12:00:00Z',
// };

const formSchema = z.object({
  name: z.string({ required_error: 'Name is required' }).optional(),
  email: z.string({ required_error: 'Email is required' }).email().optional(),
  image: z.string({ required_error: 'Email is required' }).optional(),
  address: z.string({ required_error: 'Address is required' }).optional(),
  contactNo: z.string({ required_error: 'Contact no is required' }).optional(),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, { message: 'Password must be 6 or more long' })
    .optional(),
  gender: z.string({ required_error: 'Gender is required' }).optional(),

  licenseNo: z.string({ required_error: 'license  no is required' }).min(1),
  licenseExpire: z.string({ required_error: 'Expire date is required' }).min(1),
  nidNo: z.string({ required_error: 'NID no is required' }).min(1),
  status: z.string({ required_error: 'status no is required' }).optional(),
});

type DriverFormValues = z.infer<typeof formSchema>;

const DriverForm = ({ initialData }: any) => {
  const [loading, setLoading] = useState(false);
  const [createDriver] = useCreateDriverMutation();
  const [updateDriver] = useUpdateDriverMutation();
  const router = useRouter();

  const title = initialData ? 'Edit driver' : 'Create driver';
  const description = initialData
    ? 'Update driver infomation'
    : 'Add a new driver';
  const action = initialData ? 'Save changes' : 'Create';

  const defaultValues = {
    name: initialData?.name,
    email: initialData?.email,
    image: initialData?.image,
    address: initialData?.address,
    contactNo: initialData?.contactNo,
    gender: initialData?.gender,
    licenseNo: initialData?.licenseNo,
    licenseExpire: initialData?.licenseExpire
      ? new Date(initialData.licenseExpire).toISOString().split('T')[0]
      : '',
    nidNo: initialData?.nidNo,
    status: initialData?.status,
  };

  const form = useForm<DriverFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });
  const onSubmit = async (data: DriverFormValues) => {
    setLoading(true);
    if (initialData) {
      const id = initialData.id;
      data.licenseExpire = new Date(data.licenseExpire).toISOString();

      const res: any = await updateDriver({ id, data });

      if (res?.data?.id) {
        router.push(`/dashboard/driver`);
        toast.success('Driver updated successfully');
      } else if (res?.error) {
        toast.error(res?.error?.message);
      }
    } else {
      data.licenseExpire = new Date(data.licenseExpire).toISOString();

      const res: any = await createDriver(data);

      if (res?.data?.id) {
        router.push(`/dashboard/driver`);
        toast.success('Driver created successfully');
      } else if (res?.error) {
        toast.error(res?.error?.message);
      }
    }

    setLoading(false);
  };
  return (
    <div className="m-4">
      <DashboardHeading title={title} description={description} />
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 border shadow-sm p-6 rounded-md"
        >
          {!initialData && (
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <ImageUpload
                      value={field.value ? [field.value] : []}
                      disabled={loading}
                      onChange={url => field.onChange(url)}
                      onRemove={() => field.onChange('')}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="licenseNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>License NO</FormLabel>
                  <FormControl>
                    <Input placeholder="liscense no" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="licenseExpire"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>License Expire</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      placeholder="license expire "
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nidNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NID NO</FormLabel>
                  <FormControl>
                    <Input placeholder="NID No" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {initialData && (
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            placeholder="select status"
                            defaultValue={'Available'}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Available">Available</SelectItem>
                        <SelectItem value="Unavailable">Unavailable</SelectItem>
                        <SelectItem value="In_A_Trip">In_A_Trip</SelectItem>
                        <SelectItem value="Accident">Accident</SelectItem>
                        <SelectItem value="On_Vacation">
                          {' '}
                          On_Vacation
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {!initialData && (
              <>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Your name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your email"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Your Address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact No</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Your contact no"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue
                                placeholder="select gender"
                                defaultValue={'Available'}
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Others">Others</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? (
              <>
                {action}
                <Loader2 className="ml-2 h-4 w-4 animate-spin" />
              </>
            ) : (
              action
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default DriverForm;
