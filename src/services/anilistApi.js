import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.jikan.moe";

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
    getMangaById: builder.query({
      query: (id) => `/v3/manga/${id}`,
    }),
    getContentInfo: builder.query({
      query: (arg) => {
        const { type, id } = arg;
        return `/v3/${type}/${id}`;
      },
    }),
  }),
});

export const {
  useGetUpcomingAnimeQuery,
  useGetTopAnimeQuery,
  useGetAnimeByIdQuery,
  useGetTopMangaQuery,
  useGetMangaByIdQuery,
  useGetContentInfoQuery,
} = anilistApi;
