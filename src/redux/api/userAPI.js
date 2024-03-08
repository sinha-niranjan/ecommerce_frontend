import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAPI = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1/user",
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    newUser: builder.mutation({
      query: (formData) => ({
        url: "register",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["users"],
    }),
    login: builder.mutation({
      query: (user) => ({
        url: "login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["users"],
    }),
    logout: builder.mutation({
      query: (accessToken) => ({
        url: "logout",
        method: "GET",
        headers: {
          Authorization: ` Bearer ${accessToken}`,
        },
      }),
      invalidatesTags: ["users"],
    }),
    tokenExist: builder.mutation({
      query: (accessToken) => ({
        url: "tokenLogin",
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    allUsers: builder.mutation({
      query: (accessToken) => ({
        url: "/admin/all-users",
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
  }),
});

export const {
  useNewUserMutation,
  useLoginMutation,
  useLogoutMutation,
  useTokenExistMutation,
  useAllUsersMutation
} = userAPI;
