import { baseApi } from './baseApi';

export const rentTypeApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createRentType: build.mutation({
      query: () => ({
        url: '/rent-types',
        method: 'POST',
        data: '',
      }),
    }),

    getRentTypes: build.query({
      query: () => ({
        url: '/rent-types',
        method: 'GET',
      }),
    }),
    getRentType: build.query({
      query: id => ({
        url: `/rent-types${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCreateRentTypeMutation,
  useGetRentTypeQuery,
  useGetRentTypesQuery,
} = rentTypeApi;
