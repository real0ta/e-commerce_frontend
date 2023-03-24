import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./customFetchBase";

export const ecomApi = createApi({
  reducerPath: "ecomApi",
  baseQuery: baseQueryWithReauth,
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
        credentials: "include",
        method: "POST",
        body,
      }),
    }),
    refreshToken: builder.mutation<any, string>({
      query: () => ({
        url: "user/refresh",
        method: "POST",
        credentials: "include",
      }),
    }),
    addCategory: builder.mutation<any, string>({
      query: (category) => ({
        url: "category",
        method: "POST",
        credentials: "include",
        body: { name: category },
      }),
    }),
    addProduct: builder.mutation<any, any>({
      query: (data) => {
        console.log(data);
        return {
          url: "product",
          method: "POST",
          body: data.data,
          headers: {
            Authentication: `Bearer ${data.token}`,
          },
        };
      },
    }),
    deleteProduct: builder.mutation<any, number>({
      query: (id) => ({
        url: `product/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
    deleteCategory: builder.mutation<any, number>({
      query: (id) => ({
        url: `category/${id}`,
        method: "DELETE",
        credentials: "include",
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
  useAddCategoryMutation,
  useRefreshTokenMutation,
  useDeleteProductMutation,
  useAddProductMutation,
  useDeleteCategoryMutation,
} = ecomApi;
