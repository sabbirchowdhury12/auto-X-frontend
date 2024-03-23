'use client';

import { Heading } from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

import { Separator } from '@/components/ui/separator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  vehicleId: z.string({ required_error: 'Vehicle Id is required' }),
});

type VehicleFormValues = z.infer<typeof formSchema>;

const BookingForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<VehicleFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: VehicleFormValues) {
    setLoading(true);
    console.log(values);

    setLoading(false);
  }
  return (
    <div className="m-4">
      <Heading title={'Update booking'} description={'Update booking status'} />
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 border shadow-sm p-6 rounded-md"
        >
          <Button type="submit" disabled={loading}>
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

export default BookingForm;
