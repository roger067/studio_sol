import { useParams } from 'react-router-dom';
import { Layout, BookCardDetail, BookBackground } from '../components';
import { Container, Title, Text, Flex, COLORS } from '../ui';
import { useGetBookByIdQuery } from '../services/booksApi';

const BookDetail = () => {
  const { id = '' } = useParams();
  const { data } = useGetBookByIdQuery({ id });

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
          <Title fontSize="2.125rem" lineHeight="2.5rem" as="h1" my="0">
            {data?.book.name}
          </Title>
          <Text color={COLORS.GRAY_400} fontSize="1.5rem">
            {data?.book.author.name}
          </Text>
        </Flex>
      </Container>
      <BookBackground urlImage={data?.book.cover || ''} />
      <BookCardDetail
        urlImage={data?.book.cover || ''}
        title={data?.book.name || ''}
        author={data?.book.author.name || ''}
        description={data?.book.description || ''}
        isFavorite={!!data?.book.isFavorite}
      />
    </Layout>
  );
};

export default BookDetail;
