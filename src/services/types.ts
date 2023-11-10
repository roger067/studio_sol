export enum BOOK_CATEGORIES {
  ROMANCE = 'Romance',
  ADVENTURE = 'Aventura',
  COMEDY = 'Comédia',
  HORROR = 'Terror',
  TECHNOLOGY = 'Tecnologia',
  TRAVEL = 'Viagem',
}

export interface Book {
  id: string;
  name: string;
  author: { name: string };
  cover: string;
}

export interface DetailedBook extends Book {
  isFavorite: boolean;
  description: string;
}

export interface Author {
  id: string;
  name: string;
  picture: string;
  isFavorite: boolean;
  booksCount: number;
}

export interface GetBookByIdResponse {
  book: DetailedBook;
}

export interface GetFavoriteBooksResponse {
  favoriteBooks: Book[];
}

export interface GetBooksResponse {
  allBooks: Book[];
}

export interface GetAuthorsResponse {
  favoriteAuthors: Author[];
}

export interface GetUserPhotoResponse {
  userPicture: string;
}
