import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.jikan.moe/v3";

const searchURL = (q, type, status, genre, sort, content) => {
  if (!q || !genre) {
    return `/top/${content}`;
  }

  return `/search/${content}`;
};

export const contentApi = createApi({
  reducerPath: "contentApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    search: builder.query({
      query: (arg) => {
        const { q, genres, content, url } = arg;

        if (!q && !genres) {
          return `/top/${content}`;
        }

        if (q || genres) {
          return url;
        }
      },
    }),
    topContent: builder.query({
      query: (type) => {
        if (type === "anime") {
          return "/top/anime/1/upcoming";
        }
        return "/top/manga";
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
