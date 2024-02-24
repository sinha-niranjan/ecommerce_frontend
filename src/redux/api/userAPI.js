import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

export const userAPI = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1/user",
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    newUser: builder.mutation({
      query: ({ formData }) => ({
        url: "register",
        method: "POST",
        body: formData,
        headers: { "Content-Type": "application/json" },
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
          "Authorization":` Bearer ${accessToken}`
        }
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useNewUserMutation, useLoginMutation, useLogoutMutation } =
  userAPI;
