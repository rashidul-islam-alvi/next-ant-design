import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),

    deleteUser: builder.mutation({
      query: (id) => {
        return {
          url: `users/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const { useGetAllUsersQuery, useDeleteUserMutation } = usersApi;
