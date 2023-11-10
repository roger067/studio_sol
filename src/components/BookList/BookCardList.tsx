import styled from 'styled-components';

import { Skeleton, Swiper, Flex, ErrorMessage } from '../../ui';
import { BookCard } from '..';
import { useGetFavoriteBooksQuery } from '../../services/booksApi';

const BookCardList = () => {
  const { data, isLoading, isError } = useGetFavoriteBooksQuery();

  if (isError)
    return (
      <ErrorMessage
        title="Algo deu errado!"
        description="Tente carregar a página novamente..."
      />
    );

  return (
    <CardList gap="24px">
      {data && !isLoading ? (
        data.favoriteBooks.map((book) => (
          <BookCard
            key={book.id}
            linkTo={`/${book.id}`}
            image={book.cover}
            title={book.name}
            author={book.author.name}
          />
        ))
      ) : (
        <Flex width="100%" gap="24px">
          {Array.from({ length: 7 }, (_, index) => (
            <Flex key={index} flexDirection="column" width="100%" gap="12px">
              <Skeleton height="198px" />
              <Skeleton />
              <Skeleton />
            </Flex>
          ))}
        </Flex>
      )}
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
