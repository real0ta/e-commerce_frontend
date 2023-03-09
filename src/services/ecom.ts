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
    getProductById: builder.query<any, string>({
      query: (id) => `product/${id}`,
    }),
    getProductsByCategoryId: builder.query<any, string>({
      query: (id) => `category/${id}`,
    }),
    signUpUser: builder.mutation<any, object>({
      query: (body) => ({
        url: "user",
        method: "POST",
        body,
      }),
    }),
    signInUser: builder.mutation<any, object>({
      query: (body) => ({
        url: "user/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryIdQuery,
  useGetProductByIdQuery,
  useSignUpUserMutation,
  useSignInUserMutation,
} = ecomApi;
