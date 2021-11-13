import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.jikan.moe/v3";

export const contentApi = createApi({
  reducerPath: "contentApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    search: builder.query({
      query: (arg) => {
        const { q, genres, content, type, status, sort } = arg;

        if (!q && !genres) {
          return `/top/${content}`;
        }

        const searchInput = q ? q : "";
        const genre = genres ? `&genre=${genres}` : "";
        const format = type ? `&type=${type}` : "";
        const statusInput = status ? `&status=${status}` : "";
        const sortBy = sort ? `&sort=${sort}` : "";

        return `/search/${content}?q=${searchInput}${genre}${format}${statusInput}${sortBy}`;
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
  }),
});

export const { useSearchQuery, useTopContentQuery, useContentInfoQuery } =
  contentApi;
