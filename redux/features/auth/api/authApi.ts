import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api" }),
  endpoints: (builder) => ({
    signinUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: "/login",
          method: "POST",
          body,
        };
      },
    }),
    signupUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: "/register",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useSigninUserMutation, useSignupUserMutation } = authApi;
