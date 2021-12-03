import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["User", "Anime", "Manga"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/api/users/register",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Anime"],
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/users/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Anime"],
    }),
    addAnime: builder.mutation({
      query: (anime) => ({
        url: "/api/anime",
        method: "POST",
        body: anime,
      }),
      invalidatesTags: ["Anime"],
    }),
    getAnime: builder.query({
      query: () => "/api/anime",
      providesTags: ["Anime"],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useAddAnimeMutation } =
  userApi;
