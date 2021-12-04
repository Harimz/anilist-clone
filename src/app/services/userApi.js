import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Anime", "Manga"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/api/users/register",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Anime", "Manga"],
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/users/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Anime", "Manga"],
    }),
    addAnime: builder.mutation({
      query: (anime) => ({
        url: "/api/anime",
        method: "POST",
        body: anime,
      }),
      invalidatesTags: ["Anime"],
    }),
    addManga: builder.mutation({
      query: (manga) => ({
        url: "/api/manga",
        method: "POST",
        body: manga,
      }),
      invalidatesTags: ["Manga"],
    }),
    getAnime: builder.query({
      query: () => "/api/anime",
      providesTags: ["Anime"],
    }),
    getManga: builder.query({
      query: () => "/api/manga",
      providesTags: ["Manga"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useAddAnimeMutation,
  useAddMangaMutation,
} = userApi;
