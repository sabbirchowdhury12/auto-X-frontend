'use client';

import logo from '@/assets/logo.png';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

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

import { toast } from 'sonner';

import CustomImage from '@/components/customImage';
import GoogleIcon from '@/components/icons/google';
import { useUserLoginMutation } from '@/redux/api/authApi';
import { getClientUserInfo, storeUserInfo } from '@/services/auth.service';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get('role');

  useEffect(() => {
    const user = getClientUserInfo();
    if (user.id) {
      router.push('/');
    }
  }, [router]);

  const [userLogin] = useUserLoginMutation();

  const FormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, {
      message: 'At least 6 characters',
    }),
  });

  // Conditionally set the default values based on the 'role' query parameter
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: role === 'admin' ? 'sabbir@gmail.com' : 'sabbir2@gmail.com',
      password: 'ffffff',
    },
  });

  async function onSubmit(loginData: z.infer<typeof FormSchema>) {
    setLoading(true);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res: any = await userLogin(loginData);

    if (res && res?.data?.accessToken) {
      toast.success('Login in successfully!');
      storeUserInfo(res?.data?.accessToken);
      router.push('/');
    } else {
      toast.message(res?.error?.message, {
        description: 'Please, try again!',
      });
    }

    setLoading(false);
  }

  return (
    <div>
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
            <CardTitle className="text-2xl ">Login Account</CardTitle>
            <CardDescription>Enter your email & password.</CardDescription>
          </CardHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="grid gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Email"
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button disabled={loading} className="w-full">
                  {loading ? (
                    <>
                      {'Login'}
                      <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    'Login'
                  )}
                </Button>
              </CardContent>
            </form>
          </Form>

          <CardFooter className="grid gap-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>

            <Button
              className="w-full flex items-center justify-center gap-2"
              variant="outline"
            >
              <GoogleIcon className="w-4 h-4" />
              Continue with Google
            </Button>

            <p className="text-center text-sm">
              Don&apos;t have an account?
              <Link href={'/register'}>
                <span className="font-bold cursor-pointer underline underline-offset-2 ml-2">
                  Register
                </span>
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
