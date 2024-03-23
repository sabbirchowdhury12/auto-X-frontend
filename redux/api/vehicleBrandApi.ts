import { baseApi } from './baseApi';

export const vehicleBrandApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createVehicleBrand: build.mutation({
      query: () => ({
        url: '/vehicle-brands',
        method: 'POST',
        data: '',
      }),
    }),
  }),
});

export const { useCreateVehicleBrandMutation } = vehicleBrandApi;
