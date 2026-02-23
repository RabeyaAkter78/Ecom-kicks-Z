import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.escuelajs.co/api/v1/",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "products",
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
      providesTags: (result, error, id) => [{ type: "Products", id }],
    }),
    getProductByCategory: builder.query({
      query: () => ({
        url: "categories",
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery, useGetProductByCategoryQuery } = productsApi;
