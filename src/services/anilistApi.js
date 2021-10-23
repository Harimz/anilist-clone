import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.jikan.moe";

const createSearchUrl = (content, search, genre, type, status, sort) => {
  const searchInput = search ? search : "";
  const typeInput = type ? `&type=${type}` : "";
  const statusInput = status ? `&status=${status}` : "";
  const sortInput = sort ? `&score=${sort}` : "";

  return `/v3/search/${content}?q=${searchInput}&genre=${genre}${typeInput}${statusInput}${sortInput}&page=1`;
};

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
    getTopContent: builder.query({
      query: (type) => `/v3/top/${type}`,
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
    getSearchResults: builder.query({
      query: (arg) => {
        const { content, search, type, genre, status, sort } = arg;
        return createSearchUrl(content, search, genre, type, status, sort);
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
  useGetSearchResultsQuery,
} = anilistApi;
