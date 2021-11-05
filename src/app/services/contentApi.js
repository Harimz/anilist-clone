import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.jikan.moe/v3";

export const contentApi = createApi({
  reducerPath: "contentApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    search: builder.mutation({
      query: (arg) => {},
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

export const { useSearchMutation, useTopContentQuery, useContentInfoQuery } =
  contentApi;
