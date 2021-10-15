import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const anilistHeaders = {
  "x-rapidapi-host": "jikan1.p.rapidapi.com",
  "x-rapidapi-key": "73c038d2cemshb21e1536d9ed598p15db15jsn4680dcc13070",
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
