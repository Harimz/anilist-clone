import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.jikan.moe/";

export const anilistApi = createApi({
  reducerPath: "anilistApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUpcomingAnime: builder.query({
      query: () => `/v3/top/anime/1/upcoming`,
    }),
    getTopAnime: builder.query({
      query: () => `/v3/top/anime`,
    }),
    getTopManga: builder.query({
      query: () => "/v3/top/manga",
    }),
    getAnimeById: builder.query({
      query: (id) => `/v3/anime/${id}`,
    }),
    getAnime: builder.query({}),
  }),
});

export const {
  useGetUpcomingAnimeQuery,
  useGetTopAnimeQuery,
  useGetAnimeByIdQuery,
} = anilistApi;
