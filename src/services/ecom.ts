import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ecomApi = createApi({
  reducerPath: "ecomApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:3001/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({
      query: () => `product`,
    }),
  }),
});

export const { useGetProductsQuery } = ecomApi;
