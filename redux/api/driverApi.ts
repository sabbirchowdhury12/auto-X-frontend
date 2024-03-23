import { baseApi } from './baseApi';

export const driverApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createDriver: build.mutation({
      query: data => ({
        url: '/drivers',
        method: 'POST',
        data: data,
      }),
      invalidatesTags: ['driver'],
    }),

    getAllDriver: build.query({
      query: () => ({
        url: '/drivers',
        method: 'GET',
      }),
      providesTags: ['driver'],
    }),
    getSingleDriver: build.query({
      query: id => ({
        url: `/drivers/${id}`,
        method: 'GET',
      }),
    }),
    updateDriver: build.mutation({
      query: ({ id, data }) => ({
        url: `/drivers/${id}`,
        method: 'PATCH',
        data: data,
      }),
      invalidatesTags: ['driver'],
    }),

    deleteDriver: build.mutation({
      query: id => ({
        url: `/drivers/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['driver'],
    }),
  }),
});

export const {
  useCreateDriverMutation,
  useGetAllDriverQuery,
  useGetSingleDriverQuery,
  useUpdateDriverMutation,
  useDeleteDriverMutation,
} = driverApi;
