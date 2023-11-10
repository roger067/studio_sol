import { BookCard } from '..';
import { useGetBooksQuery } from '../../services/booksApi';
import { Flex, Skeleton, ErrorMessage } from '../../ui';

const AllBookList = () => {
  const { data, isLoading, isError } = useGetBooksQuery();

  if (isError)
    return (
      <ErrorMessage
        title="Algo deu errado!"
        description="Tente carregar a página novamente..."
      />
    );

  return (
    <Flex mt="24px" mb="56px" gap="24px" flexWrap="wrap">
      {data && !isLoading ? (
        data.allBooks.map((book) => (
          <BookCard
            key={book.id}
            linkTo={`/${book.id}`}
            image={book.cover}
            title={book.name}
            author={book.author.name}
            direction="horizontal"
          />
        ))
      ) : (
        <Flex width="100%" gap="24px">
          {Array.from({ length: 3 }, (_, index) => (
            <Flex key={index} width="100%" gap="16px" alignItems="center">
              <Skeleton height="68px" width="68px" borderRadius="8px" />
              <Flex flexDirection="column" width="100%" gap="8px">
                <Skeleton />
                <Skeleton />
              </Flex>
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default AllBookList;
