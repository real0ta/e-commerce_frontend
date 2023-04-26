import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./customFetchBase";

export const ecomApi = createApi({
  reducerPath: "ecomApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Category', 'Product'],
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({
      query: () => `product`,
      providesTags: ['Product'],
    }),
    getCategories: builder.query<any, void>({
      query: () => `category`,
      providesTags: ['Category'],
    }),
    getProductById: builder.query<any, string>({
      query: (id) => `product/${id}`,
    }),
    getProductsByCategoryId: builder.query<any, string>({
      query: (id) => `category/${id}`,
    }),
    getProductsByName: builder.query<any, string>({
      query: (name) => `product/?name=${name}`
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

    isAdmin: builder.query<any, void>({
      query: () => ({
        url: "user/isadmin",
        method: "GET",
        credentials: "include",
      }),
    }),
    refreshToken: builder.mutation<any, void>({
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
      invalidatesTags: ['Category'],
    }),
    addProduct: builder.mutation<any, { name: string, description: string, price: string, quantity: string, categoryId: string, image: Blob }>({
      query: (data) => {
        const form = new FormData()
        form.append("name", data.name)
        form.append("description", data.description)
        form.append("price", data.price)
        form.append("quantity", data.quantity)
        form.append("category", data.categoryId)
        form.append("image", data.image)

        return {
          url: "product",
          method: "POST",
          body: form,
        };
      },
      invalidatesTags: ['Product'],
    }),
    deleteProduct: builder.mutation<any, number>({
      query: (id) => ({
        url: `product/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ['Product'],
    }),
    deleteCategory: builder.mutation<any, number>({
      query: (id) => ({
        url: `category/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ['Category'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryIdQuery,
  useGetProductsByNameQuery,
  useGetProductByIdQuery,
  useSignUpUserMutation,
  useSignInUserMutation,
  useAddCategoryMutation,
  useRefreshTokenMutation,
  useDeleteProductMutation,
  useAddProductMutation,
  useDeleteCategoryMutation,
  useIsAdminQuery,
} = ecomApi;
