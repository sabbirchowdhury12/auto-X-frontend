'use client';

import { useState } from 'react';

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
import { useChangePasswordMutation } from '@/redux/api/authApi';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { getClientUserInfo } from '@/services/auth.service';

const formSchema: any = z
  .object({
    oldPassword: z
      .string({ required_error: 'Old password is required' })
      .min(6, { message: 'Password must be 6 or more long' }),
    newPassword: z
      .string({ required_error: 'New password is required' })
      .min(6, { message: 'Password must be 6 or more long' }),
    confirmNewPassword: z
      .string({
        required_error: 'Confirm new password is required',
      })
      .min(6, { message: 'Password must be 6 or more long' }),
  })
  .refine(
    values => {
      return values.newPassword === values.confirmNewPassword;
    },
    {
      message: 'Confirm passwords does not match!',
      path: ['confirmNewPassword'],
    },
  );

type ChangePasswordFormValues = z.infer<typeof formSchema>;

export const ChangePasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const user = getClientUserInfo();

  const [changePassword] = useChangePasswordMutation();

  const form = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: ChangePasswordFormValues) => {
    setLoading(true);

    const changedData = {
      email: 'dsf',
      id: user?.id,
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res: any = await changePassword(changedData);

    if (res) {
      toast.success('Password changed successfully');
    } else if (res?.error) {
      toast.error(res?.error?.message);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mt-2 mb-4">Change password</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Old Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Your old password"
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
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Your new password"
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
              name="confirmNewPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm New Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Confirm new password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            disabled={loading}
            size={'sm'}
            className="ml-auto"
            type="submit"
          >
            {loading ? (
              <>
                {'Change password'}
                <Loader2 className="ml-2 h-4 w-4 animate-spin" />
              </>
            ) : (
              'Change password'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};
