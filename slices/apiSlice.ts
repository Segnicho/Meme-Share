
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_BASE_URL = "http://localhost:300/api";
export const api = createApi({
  reducerPath: "/memes",
  tagTypes: ["Memes"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints(builder) {
    return {
      fetchMemes: builder.query<void, void>({
        query: () => "/memes",
        providesTags: ["Memes"],
      }),
    };
  },
});

export const { useFetchMemesQuery } = api;
