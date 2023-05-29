"use client"
import { api } from "@/slices/apiSlice";

export const userApi = api.injectEndpoints({
  endpoints(builder) {
    return {
      fetchUsers: builder.query<void, void>({
        query: () => "/users",
        providesTags: ["Users"],
      }),
    };
  },
});

export const { useFetchUsersQuery } = userApi;
