import { baseApi } from './baseApi';

export const profileApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getProfile: build.query({
      query: id => ({
        url: `/profiles/${id}`,
        method: 'GET',
      }),
    }),

    deleteProfile: build.mutation({
      query: id => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetProfileQuery, useDeleteProfileMutation } = profileApi;
