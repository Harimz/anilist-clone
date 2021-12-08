import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Anime", "Manga", "Status"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/api/users/register",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Anime", "Manga", "Status"],
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/users/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Anime", "Manga", "Status"],
    }),
    addAnime: builder.mutation({
      query: (anime) => ({
        url: "/api/anime",
        method: "POST",
        body: anime,
      }),
      invalidatesTags: ["Anime"],
    }),
    addManga: builder.mutation({
      query: (manga) => ({
        url: "/api/manga",
        method: "POST",
        body: manga,
      }),
      invalidatesTags: ["Manga"],
    }),
    getAnime: builder.query({
      query: () => "/api/anime",
      providesTags: ["Anime"],
    }),
    getManga: builder.query({
      query: () => "/api/manga",
      providesTags: ["Manga"],
    }),
    addStatus: builder.mutation({
      query: (message) => ({
        url: "/api/status/",
        method: "POST",
        body: message,
      }),
      invalidatesTags: ["Status"],
    }),
    getMessages: builder.query({
      query: () => "/api/status",
      providesTags: ["Status"],
    }),
    deleteMessage: builder.mutation({
      query: (id) => ({
        url: `/api/status/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Status"],
    }),
    editMessage: builder.mutation({
      query: (status) => ({
        url: `/api/status/${status.id}`,
        method: "PUT",
        body: status,
      }),
      invalidatesTags: ["Status"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useAddAnimeMutation,
  useAddMangaMutation,
  useGetAnimeQuery,
  useGetMangaQuery,
  useAddStatusMutation,
  useGetMessagesQuery,
  useDeleteMessageMutation,
  useEditMessageMutation,
} = userApi;
