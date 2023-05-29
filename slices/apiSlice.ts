"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// const API_BASE_URL = "http://localhost:3000/api";
const API_BASE_URL = "https://meme-share.vercel.app/api";

// https://meme-share.vercel.app/
export const api = createApi({
  tagTypes: ["Memes", "Users"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (builder) => ({}),
});
