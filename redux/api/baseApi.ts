import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
    // baseUrl: 'https://autox-backend-bay.vercel.app/api/v1',
  }),
  endpoints: () => ({}),
  tagTypes: ['driver', 'vehicle', 'profile'],
});
