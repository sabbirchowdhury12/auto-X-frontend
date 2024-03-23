import { baseApi } from './baseApi';

export const vehicleApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createVehicle: build.mutation({
      query: data => ({
        url: '/vehicles',
        method: 'POST',
        data: data,
      }),
      invalidatesTags: ['vehicle'],
    }),

    getAllVehicle: build.query({
      query: () => ({
        url: '/vehicles',
        method: 'GET',
      }),
      providesTags: ['vehicle'],
    }),

    getSingleVehicle: build.query({
      query: id => ({
        url: `/vehicles/${id}`,
        method: 'GET',
      }),
    }),

    updateVehicle: build.mutation({
      query: ({ id, data }) => ({
        url: `/vehicles/${id}`,
        method: 'PATCH',
        data: data,
      }),
      invalidatesTags: ['vehicle'],
    }),

    deleteVehicle: build.mutation({
      query: id => ({
        url: `/vehicles/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['vehicle'],
    }),
  }),
});

export const {
  useCreateVehicleMutation,
  useGetAllVehicleQuery,
  useGetSingleVehicleQuery,
  useUpdateVehicleMutation,
  useDeleteVehicleMutation,
} = vehicleApi;
