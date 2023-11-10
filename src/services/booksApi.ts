import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import {
  GET_BOOKS,
  GET_BOOK_BY_ID,
  GET_FAVORITE_AUTHORS,
  GET_FAVORITE_BOOKS,
  GET_USER_PHOTO,
} from './queries';
import {
  GetBooksResponse,
  GetFavoriteBooksResponse,
  GetBookByIdResponse,
  GetUserPhotoResponse,
  GetAuthorsResponse,
} from './types';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: graphqlRequestBaseQuery({
    url: 'https://us-central1-ss-devops.cloudfunctions.net/GraphQL',
  }),
  endpoints: (builder) => ({
    getBooks: builder.query<GetBooksResponse, void>({
      query: () => ({
        document: GET_BOOKS,
      }),
    }),
    getFavoriteBooks: builder.query<GetFavoriteBooksResponse, void>({
      query: () => ({
        document: GET_FAVORITE_BOOKS,
      }),
    }),
    getBookById: builder.query<GetBookByIdResponse, { id: string }>({
      query: ({ id }) => ({
        document: GET_BOOK_BY_ID,
        variables: { id },
      }),
    }),
    getAuthors: builder.query<GetAuthorsResponse, void>({
      query: () => ({
        document: GET_FAVORITE_AUTHORS,
      }),
    }),
    getUserPhoto: builder.query<GetUserPhotoResponse, void>({
      query: () => ({
        document: GET_USER_PHOTO,
      }),
    }),
  }),
});

export const {
  useGetFavoriteBooksQuery,
  useGetBooksQuery,
  useGetUserPhotoQuery,
  useGetAuthorsQuery,
  useGetBookByIdQuery,
} = booksApi;
