import { useParams } from 'react-router-dom';
import { Layout, BookCardDetail, BookBackground } from '../components';
import {
  Container,
  Title,
  Text,
  Flex,
  COLORS,
  ErrorMessage,
  Skeleton,
} from '../ui';
import { useGetBookByIdQuery } from '../services/booksApi';

const BookDetail = () => {
  const { id = '' } = useParams();
  const { data, isLoading, isError } = useGetBookByIdQuery({ id });

  if (isError)
    return (
      <Layout hideOnMobileDevice>
        <Container>
          <ErrorMessage
            title="Algo deu errado!"
            description="Tente carregar a página novamente..."
          />
        </Container>
      </Layout>
    );

  return (
    <Layout hideOnMobileDevice>
      <Container>
        <Flex
          flexDirection="column"
          ml="320px"
          display={['none', 'none', 'flex']}
          mt="24px"
          gap="12px"
        >
          {!isLoading && data ? (
            <>
              <Title fontSize="2.125rem" lineHeight="2.5rem" as="h1" my="0">
                {data?.book.name}
              </Title>
              <Text color={COLORS.GRAY_400} fontSize="1.5rem">
                {data?.book.author.name}
              </Text>
            </>
          ) : (
            <Flex flexDirection="column" gap="12px" width="100%">
              <Skeleton width="100%" height="28px" />
              <Skeleton width="50%" />
            </Flex>
          )}
        </Flex>
      </Container>
      {!isLoading && data ? (
        <>
          <BookBackground urlImage={data?.book.cover || ''} />
          <BookCardDetail
            urlImage={data?.book.cover || ''}
            title={data?.book.name || ''}
            author={data?.book.author.name || ''}
            description={data?.book.description || ''}
            isFavorite={!!data?.book.isFavorite}
          />
        </>
      ) : (
        <Container>
          <Flex mb="33%" mt="32px" gap="24px">
            <Flex minWidth="296px">
              <Skeleton height="248px" />
            </Flex>
            <Flex flexDirection="column" width="100%" gap="12px">
              {Array.from({ length: 8 }, (_, index) => (
                <Skeleton key={index} />
              ))}
            </Flex>
          </Flex>
        </Container>
      )}
    </Layout>
  );
};

export default BookDetail;
