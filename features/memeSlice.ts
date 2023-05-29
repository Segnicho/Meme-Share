"use client";
import { API_BASE_URL, api } from "@/slices/apiSlice";
import { Meme } from "@/types/memes";

export const memesApi = api.injectEndpoints({
  endpoints(builder) {
    return {
      fetchMemes: builder.query<Meme[], void>({
        query: () => `${API_BASE_URL}/memes`,
        providesTags: ["Memes"],
      }),
      addNewMeme: builder.mutation<Meme, Partial<Meme>>({
        query: (meme) => ({
          url: "/memes",
          method: "POST",
          body: meme,
        }),
        invalidatesTags: ["Memes"],
      }),
      updateMeme: builder.mutation<Meme, Partial<Meme>>({
        query: (meme) => ({
          url: `/memes/${meme._id}`,
          method: "PATCH",
          body: meme,
        }),
        invalidatesTags: ["Memes"],
      }),
    };
  },
});

export const {
  useFetchMemesQuery,
  useAddNewMemeMutation,
  useUpdateMemeMutation,
} = memesApi;
