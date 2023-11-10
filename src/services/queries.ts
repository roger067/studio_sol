import { gql } from 'graphql-request';

export const GET_USER_PHOTO = gql`
  query GetUserPhoto {
    userPicture
  }
`;

export const GET_FAVORITE_BOOKS = gql`
  query GetFavoriteBooks() {
    favoriteBooks() {
      id
      name
      cover
      author {
        name
      }
    }
  }
`;

export const GET_FAVORITE_AUTHORS = gql`
  query GetFavoriteAuthors {
    favoriteAuthors {
      id
      name
      picture
      isFavorite
      booksCount
    }
  }
`;

export const GET_BOOKS = gql`
  query GetBooks {
    allBooks {
      id
      name
      author {
        name
      }
      cover
      isFavorite
    }
  }
`;

export const GET_BOOK_BY_ID = gql`
  query GetBookById($id: ID!) {
    book(id: $id) {
      id
      name
      cover
      description
      author {
        name
      }
    }
  }
`;
