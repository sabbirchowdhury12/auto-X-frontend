import { baseApi } from './baseApi';

export const profileApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getProfile: build.query({
      query: id => ({
        url: `/profiles/${id}`,
        method: 'GET',
      }),
      providesTags: ['profile'],
    }),
    updateProfile: build.mutation({
      query: ({ id, data }) => ({
        url: `/profiles/${id}`,
        method: 'PATCH',
        data: data,
      }),
      invalidatesTags: ['profile'],
    }),

    deleteProfile: build.mutation({
      query: id => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useDeleteProfileMutation,
  useUpdateProfileMutation,
} = profileApi;
