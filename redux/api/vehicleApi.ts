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
      query: ({
        searchValue,
        brandValue,
        fuelType,
        carType,
        status,
        color,
      }) => ({
        url: `/vehicles?searchTerm=${searchValue}&brand=${brandValue}&fuelType=${fuelType}&carType=${carType}&status=${status}&color=${color}`,
        method: 'GET',
      }),
      providesTags: ['vehicle'],
    }),
    getAvailableVehicle: build.query({
      query: () => ({
        url: `/vehicles/available`,
        method: 'GET',
      }),
      providesTags: ['vehicle'],
    }),
    getAllDashboardVehicle: build.query({
      query: () => ({
        url: `/vehicles/dashboard`,
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
  useGetAvailableVehicleQuery,
  useGetAllDashboardVehicleQuery,
} = vehicleApi;
