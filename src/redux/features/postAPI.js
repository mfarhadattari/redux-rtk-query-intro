import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => "/posts",
    }),
    getPostDetails: build.query({
      query: (id) => `posts/${id}`,
    }),
    addPost: build.mutation({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation, useGetPostDetailsQuery } = postAPI;

export default postAPI;
