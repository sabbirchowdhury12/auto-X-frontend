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
    getAllBooking: build.query({
      query: () => ({
        url: '/bookings',
        method: 'GET',
      }),
      // providesTags: ['booking'],
    }),
    getSingleBooking: build.query({
      query: id => ({
        url: `/bookings/${id}`,
        method: 'GET',
      }),
      // providesTags: ['booking'],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetAllBookingQuery,
  useGetSingleBookingQuery,
} = bookingApi;
