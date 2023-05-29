"use client"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_BASE_URL = "http://localhost:3000/api";
export const api = createApi({
  reducerPath: "/memes",
  tagTypes: ["Memes", "Users"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (builder) =>({})
});

