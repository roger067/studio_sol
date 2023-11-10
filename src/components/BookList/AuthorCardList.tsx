import { AuthorCard } from '..';
import { useGetAuthorsQuery } from '../../services/booksApi';
import { ErrorMessage, Flex, Skeleton, Swiper } from '../../ui';

const AuthorCardList = () => {
  const { data, isLoading, isError } = useGetAuthorsQuery();

  if (isError)
    return (
      <ErrorMessage
        title="Algo deu errado!"
        description="Tente carregar a página novamente..."
      />
    );

  return (
    <Swiper gap="24px">
      {data && !isLoading ? (
        data.favoriteAuthors.map((author) => (
          <AuthorCard
            key={author.id}
            image={author.picture}
            name={author.name}
            quantity={author.booksCount}
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
    </Swiper>
  );
};

export default AuthorCardList;
