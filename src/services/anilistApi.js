import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const anilistHeaders = {
  "x-rapidapi-host": "jikan1.p.rapidapi.com",
  "x-rapidapi-key": `${process.env.API_KEY}`,
};

const baseUrl = "https://jikan1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: anilistHeaders });

export const anilistApi = createApi({
  reducerPath: "anilistApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getTopAnime: builder.query({
      query: () => createRequest("/top/anime/1/upcoming"),
    }),
  }),
});

export const { useGetTopAnimeQuery } = anilistApi;
