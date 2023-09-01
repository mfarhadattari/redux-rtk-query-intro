import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    getPost: build.query({
      query: () => "/posts",
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

export const { useGetPostQuery, useAddPostMutation } = postAPI;

export default postAPI;
