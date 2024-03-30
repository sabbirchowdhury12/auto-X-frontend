'use client';

import logo from '@/assets/logo.png';
import CustomImage from '@/components/customImage';
import ImageUpload from '@/components/imageUpload';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useUserRegisterMutation } from '@/redux/api/authApi';
import { storeUserInfo } from '@/services/auth.service';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const formSchema = z
  .object({
    name: z.string({ required_error: 'Name is required' }).min(1),
    email: z.string({ required_error: 'Email is required' }).email(),
    image: z.string({ required_error: 'Email is required' }),
    address: z.string({ required_error: 'Address is required' }),
    contactNo: z.string({ required_error: 'Contact no is required' }),
    password: z
      .string({ required_error: 'Password is required' })
      .min(6, { message: 'Password must be 6 or more long' }),
    confirmPassword: z
      .string({
        required_error: 'Confirm password is required',
      })
      .min(6, { message: 'Password must be 6 or more long' }),
  })
  .refine(
    values => {
      return values.password === values.confirmPassword;
    },
    {
      message: 'Confirm passwords does not match!',
      path: ['confirmPassword'],
    },
  );

type AdminFormValues = z.infer<typeof formSchema>;

const Register = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [register] = useUserRegisterMutation();

  const form = useForm<AdminFormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: AdminFormValues) => {
    setLoading(true);

    const registerData = {
      name: data.name,
      email: data.email,
      image: data.image,
      address: data.address,
      contactNo: data.contactNo,
      password: data.password,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res: any = await register(registerData);

    if (res?.data?.user?.id) {
      toast.success('Registion completed successfully');
      storeUserInfo(res?.data?.accessToken);
      router.push('/');
    } else if (res?.error) {
      toast.error(res?.error?.message);
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card>
        <CardHeader className="space-y-1 text-center">
          <Link href={'/'}>
            <CustomImage
              src={logo}
              alt="logo"
              priority={true}
              className="w-24 md:w-32 h-10 md:h-12"
            />
          </Link>
          <CardTitle className="text-2xl ">Register</CardTitle>
          <CardDescription>Create an account</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="text-white ">
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

            <div className="grid md:grid-cols-2 gap-4">
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
                      <Input placeholder="Your email" type="email" {...field} />
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

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Confirm password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button disabled={loading} className="ml-auto w-full" type="submit">
              {loading ? (
                <>
                  {'Register'}
                  <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                </>
              ) : (
                'Register'
              )}
            </Button>
          </form>
        </Form>
        <p className="m-1 my-2 text-sm text-center">
          Already have an account?{' '}
          <Link
            href={'/login'}
            className="font-bold underline underline-offset-2 cursor-pointer"
          >
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default Register;
