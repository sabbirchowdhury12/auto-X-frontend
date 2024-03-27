'use client';

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
import { zodResolver } from '@hookform/resolvers/zod';

import { Heading } from '@/components/heading';
import ImageUpload from '@/components/imageUpload';
import { Separator } from '@/components/ui/separator';
import { useGetProfileQuery } from '@/redux/api/profileApi';
import { getClientUserInfo } from '@/services/auth.service';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  image: z.string({ required_error: 'Image is required' }),
  address: z.string({ required_error: 'Address is required' }),
  contactNo: z.string({ required_error: 'User id is required' }),
  gender: z.string({ required_error: 'Gender is required' }),
  dateOfBirth: z.string({ required_error: 'Date is required' }),
  emergContact: z.string({ required_error: 'Emergency no is required' }),
});

type ProfileFormValues = z.infer<typeof formSchema>;

const ProfileForm = () => {
  const [loading, setLoading] = useState(false);

  const { id } = getClientUserInfo();
  const { data } = useGetProfileQuery(id);

  const defaultValues = {
    name: data?.name,
    image: data?.image,
    address: data?.address,
    contactNo: data?.contactNo,
    gender: data?.gender,
    dateOfBirth: data?.dateOfBirth,
    emergContact: data?.emergContact,
  };
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  function onSubmit(values: ProfileFormValues) {
    setLoading(false);

    setLoading(false);
  }
  return (
    <div className="p-2 md:p-6">
      <Heading
        title="Edit Profile"
        description="Edit your profile information"
      />
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 border shadow-sm p-4 rounded-md"
        >
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ImageUpload
                    value={field.value ? [field.value] : []}
                    onChange={url => field.onChange(url)}
                    onRemove={() => field.onChange('')}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
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
                    <Input placeholder="Your address" {...field} />
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
                            placeholder="select status"
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
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your birthday</FormLabel>
                  <FormControl>
                    <Input
                      type="datetime"
                      placeholder="Date of birth"
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
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Your number" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emergContact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Emergency contact no</FormLabel>
                  <FormControl>
                    <Input placeholder="Contact no" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} type="submit">
            {loading ? (
              <>
                {'Save changes'}
                <Loader2 className="ml-2 h-4 w-4 animate-spin" />
              </>
            ) : (
              'Save changes'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm;