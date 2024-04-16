/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unsafe-optional-chaining */
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
import { Textarea } from '@/components/ui/textarea';
import {
  useCreateVehicleMutation,
  useUpdateVehicleMutation,
} from '@/redux/api/vehicleApi';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  model: z.string({ required_error: 'Model is required' }).min(1),
  mileage: z.coerce.number({ required_error: 'Mileage no is required' }).min(1),
  color: z.string({ required_error: 'Color is required' }).min(1),
  images: z
    .array(
      z.string({
        required_error: 'Images required',
      }),
    )
    .min(1),
  overview: z.string({ required_error: 'Overview  is required' }).min(1),
  basePrice: z.coerce
    .number({ required_error: 'Base price  is required' })
    .min(1),
  fuelType: z.string({ required_error: 'Fuel type  is required' }).min(1),
  passengerCapacity: z.coerce
    .number({
      required_error: 'Passenger capacity   is required',
    })
    .min(1),
  location: z
    .string({
      required_error: 'Location   is required',
    })
    .min(1),
  plateNo: z
    .string({
      required_error: 'Plate number  is required',
    })
    .min(1),
  chassisNo: z
    .string({
      required_error: 'Chassis No  is required',
    })
    .min(1),
  status: z
    .string({
      required_error: 'status No  is required',
    })
    .min(1),
  owner: z
    .string({
      required_error: 'status No  is required',
    })
    .min(1),
  vehicleType: z
    .string({
      required_error: 'Vehicle Type No  is required',
    })
    .min(1),
  driverId: z
    .string({
      required_error: 'Driver Id Type No  is required',
    })
    .min(1),
  brand: z
    .string({
      required_error: 'Brand Id Type No  is required',
    })
    .min(1),
  year: z.string({ required_error: 'year  is required' }).min(1),
  registrationNumber: z
    .string({ required_error: 'registrationNumber  is required' })
    .min(1),
  rentalRate: z.coerce
    .number({ required_error: 'rentalRate  is required' })
    .min(1),
});

type VehicleFormValues = z.infer<typeof formSchema>;

const VehicleForm = ({ initialData }: any) => {
  const [loading, setLoading] = useState(false);
  const [createVehicle] = useCreateVehicleMutation();
  const [updateVehicle] = useUpdateVehicleMutation();
  const router = useRouter();

  const defaultValues = {
    model: initialData?.model,
    mileage: initialData?.mileage,
    color: initialData?.color,
    images: initialData?.images || [],
    overview: initialData?.overview,
    basePrice: initialData?.basePrice,
    fuelType: initialData?.fuelType,
    passengerCapacity: initialData?.passengerCapacity,
    location: initialData?.location,
    plateNo: initialData?.plateNo,
    chassisNo: initialData?.chassisNo,
    status: initialData?.status,
    owner: initialData?.owner,
    vehicleType: initialData?.vehicleType,
    driverId: initialData?.driverId,
    brand: initialData?.brand,
    year: initialData?.year,
    registrationNumber: initialData?.registrationNumber,
    rentalRate: initialData?.rentalRate,
  };
  const title = initialData ? 'Edit vehicle' : 'Create vehicle';
  const description = initialData
    ? 'Update vehicle infomation'
    : 'Add a new vehicle';

  const action = initialData ? 'Save changes' : 'Create';

  const form = useForm<VehicleFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = async (data: VehicleFormValues) => {
    setLoading(true);

    if (initialData) {
      const id = initialData.id;
      const res: any = await updateVehicle({ id, data });

      if (res?.data?.id) {
        router.push(`/dashboard/vehicle`);
        toast.success('Vehicle updated successfully');
      } else if (res?.error) {
        toast.error(res?.error?.message);
      }
    } else {
      const res: any = await createVehicle(data);

      if (res?.data?.id) {
        router.push(`/dashboard/vehicle`);
        toast.success('Vehicle created successfully');
      } else if (res?.error) {
        toast.error(res?.error?.message);
      }
    }

    setLoading(false);
  };
  return (
    <div className="m-4 ">
      <DashboardHeading title={title} description={description} />

      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 border shadow-sm p-6 rounded-md"
        >
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Images</FormLabel>
                <FormControl>
                  <ImageUpload
                    value={
                      Array.isArray(field.value)
                        ? field.value.map(image => image)
                        : []
                    }
                    disabled={loading}
                    onChange={url =>
                      field.onChange([...(field.value || []), url])
                    }
                    onRemove={url =>
                      field.onChange(
                        (field.value || []).filter(current => current !== url),
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Model</FormLabel>
                  <FormControl>
                    <Input placeholder="model" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mileage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mileage</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="000" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Color</FormLabel>
                  <FormControl>
                    <Input placeholder="color" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="overview"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Overview</FormLabel>
                  <FormControl>
                    <Textarea placeholder="overview" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="basePrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Base Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="000" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fuelType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fuel Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="select fuel type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="LPG">LPG</SelectItem>
                      <SelectItem value="CNG">CNG</SelectItem>
                      <SelectItem value="Petrol">Petrol</SelectItem>
                      <SelectItem value="Diesel"> Diesel</SelectItem>
                      <SelectItem value="Gasoline"> Gasoline</SelectItem>
                      <SelectItem value="Kerosene"> Kerosene</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passengerCapacity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Passenger Capacity</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="000" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="location" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="plateNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plate NO</FormLabel>
                  <FormControl>
                    <Input placeholder="plate No" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="chassisNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Chassis No</FormLabel>
                  <FormControl>
                    <Input placeholder="chassis No" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

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
                      <SelectItem value="In_A_Trip">In_A_Trip</SelectItem>
                      <SelectItem value="Accident">Accident</SelectItem>
                      <SelectItem value="Maintenance"> Maintenance</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="owner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Owner</FormLabel>
                  <FormControl>
                    <Input placeholder="owner" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="vehicleType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="select a type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="S">S</SelectItem>
                      <SelectItem value="M">M</SelectItem>
                      <SelectItem value="L">L</SelectItem>
                      <SelectItem value="XL"> XL</SelectItem>
                      <SelectItem value="XXL"> XXL</SelectItem>
                      <SelectItem value="XXXL"> XXXL</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="driverId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Driver Id</FormLabel>
                  <FormControl>
                    <Input placeholder="driver id" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="select a brand" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Toyota">Toyota</SelectItem>
                      <SelectItem value="Hyundai">Hyundai</SelectItem>
                      <SelectItem value="Audi">Audi</SelectItem>
                      <SelectItem value="Proton"> Proton</SelectItem>
                      <SelectItem value="Mitsubishi"> Mitsubishi</SelectItem>
                      <SelectItem value="BMW"> BMW</SelectItem>
                      <SelectItem value="Suzuki"> Suzuki</SelectItem>
                      <SelectItem value="Mazda"> Mazda</SelectItem>
                      <SelectItem value="Honda"> Honda</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Year</FormLabel>
                  <FormControl>
                    <Input placeholder="year" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="registrationNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Registration Number</FormLabel>
                  <FormControl>
                    <Input placeholder="registration number" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rentalRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rental Rate</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="rental rate" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
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

export default VehicleForm;
