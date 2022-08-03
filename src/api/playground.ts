import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_API_URL } from "../constants/requests";
import { Playground } from "../interfaces/Playground";


export const playgroundApi = createApi({
  reducerPath: "playgroundApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL
  }),
  endpoints: (build) => ({
    getPlaygrounds: build.query<Playground[], void>({
      query: () => ''
    })
  })
});

export const { useGetPlaygroundsQuery } = playgroundApi;
