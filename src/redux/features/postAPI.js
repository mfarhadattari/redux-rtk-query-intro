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
  }),
});

export const { useGetPostQuery } = postAPI;

export default postAPI;
