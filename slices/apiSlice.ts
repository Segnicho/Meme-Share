"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";
// const baseUrl = `${window.location.origin}/posts} `
export const api = createApi({
  tagTypes: ["Memes", "Users"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (builder) => ({}),
});
