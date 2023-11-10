import styled from 'styled-components';

import { Swiper } from '../../ui';
import { BookCard } from '..';
import { useGetFavoriteBooksQuery } from '../../services/booksApi';

const BookCardList = () => {
  const { data, isLoading } = useGetFavoriteBooksQuery();

  return (
    <CardList gap="24px">
      {data &&
        data.favoriteBooks.map((book) => (
          <BookCard
            key={book.id}
            linkTo={`/${book.id}`}
            image={book.cover}
            title={book.name}
            author={book.author.name}
          />
        ))}
    </CardList>
  );
};

const CardList = styled(Swiper)`
  > div {
    display: none;
  }

  > div:nth-child(-n + 7) {
    display: flex;
  }

  @media (max-width: 768px) {
    > div {
      display: flex;
    }
  }
`;

export default BookCardList;
