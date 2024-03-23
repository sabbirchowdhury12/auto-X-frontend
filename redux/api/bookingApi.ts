import { baseApi } from './baseApi';

export const bookingApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createBooking: build.mutation({
      query: data => ({
        url: '/bookings',
        method: 'POST',
        data: data,
      }),
    }),
  }),
});

export const { useCreateBookingMutation } = bookingApi;
