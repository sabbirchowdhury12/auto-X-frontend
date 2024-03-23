import { baseApi } from './baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: build => ({
    userRegister: build.mutation({
      query: registerData => ({
        url: '/auth/register',
        method: 'POST',
        data: registerData,
      }),
    }),

    userLogin: build.mutation({
      query: loginData => ({
        url: '/auth/login',
        method: 'POST',
        data: loginData,
      }),
    }),

    changePassword: build.mutation({
      query: data => ({
        url: '/auth/change-password',
        method: 'PATCH',
        data: data,
      }),
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useChangePasswordMutation,
} = authApi;
