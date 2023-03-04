import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ecomApi = createApi({
  reducerPath: "ecomApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({
      query: () => `product`,
    }),
    getCategories: builder.query<any, void>({
      query: () => `category`,
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = ecomApi;
