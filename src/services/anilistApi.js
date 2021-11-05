import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.jikan.moe";

const createSearchUrl = (
  content,
  search,
  genre,
  type,
  status,
  sort,
  orderBy
) => {
  const searchInput = search ? search : "";
  const typeInput = type ? `&type=${type}` : "";
  const statusInput = status ? `&status=${status}` : "";
  const sortInput = sort ? `&score=${sort}` : "";
  const orderByInput = orderBy ? `&order_by=${orderBy}` : "";

  return `/v3/search/${content}?q=${searchInput}&genre=${genre}${typeInput}${statusInput}${sortInput}&page=1,2`;
};

export const anilistApi = createApi({
  reducerPath: "anilistApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUpcomingAnime: builder.query({
      query: () => `/v3/top/anime/1/upcoming`,
    }),
    getTopContent: builder.query({
      query: (type) => `/v3/top/${type}`,
    }),
    getContentInfo: builder.query({
      query: (arg) => {
        const { type, id } = arg;
        return `/v3/${type}/${id}`;
      },
    }),
    getSearchResults: builder.query({
      query: (arg) => {
        const { content, search, type, genre, status, sort, orderBy } = arg;
        return createSearchUrl(
          content,
          search,
          genre,
          type,
          status,
          sort,
          orderBy
        );
      },
    }),
  }),
});

export const {
  useGetUpcomingAnimeQuery,
  useGetContentInfoQuery,
  useGetSearchResultsQuery,
  useGetTopContentQuery,
} = anilistApi;
