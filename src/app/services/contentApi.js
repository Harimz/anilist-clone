import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.jikan.moe/v3";

export const contentApi = createApi({
  reducerPath: "contentApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    search: builder.query({
      query: (arg) => {
        const { q, genres, content, type, status, sort, order_by } = arg;

        if (!q && !genres && !order_by) {
          return `/search/anime?q=&order_by=members&sort=desc&page=1`;
        }

        const searchInput = q ? q : "";
        const genre = genres ? `&genre=${genres}` : "";
        const format = type ? `&type=${type}` : "";
        const statusInput = status ? `&status=${status}` : "";
        const sortBy = sort ? `&sort=${sort}` : "";
        const orderBy = order_by ? `&order_by=${order_by}` : "";

        return `/search/${content}?q=${searchInput}${genre}${format}${statusInput}${orderBy}${sortBy}`;
      },
    }),
    topContent: builder.query({
      query: (arg) => {
        const { contentType, type } = arg;
        if (type === "upcoming") {
          return "/top/anime/1/upcoming";
        }

        if (type === "top") {
          return `/top/${contentType}`;
        }
      },
    }),
    contentInfo: builder.query({
      query: (arg) => {
        const { type, id } = arg;
        return `/${type}/${id}`;
      },
    }),
    searchTop: builder.query({
      query: (arg) => {
        const { content, searchType } = arg;

        if (searchType === "top-100") {
          return `/top/${content}`;
        }

        if (searchType === "top-movies") {
          return "/top/anime/1/movie";
        }

        if (searchType === "top-manhwa") {
          return "/top/manga/1/manhwa";
        }

        if (searchType === "trending") {
          return "/top/anime/1/airing";
        }

        if (searchType === "upcoming") {
          return "/top/anime/1/upcoming";
        }
      },
    }),
  }),
});

export const {
  useSearchQuery,
  useTopContentQuery,
  useContentInfoQuery,
  useSearchTopQuery,
} = contentApi;
