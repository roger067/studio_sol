import { Layout, BookCardDetail } from '../components';
import { Container, Title, Text, Flex, COLORS } from '../ui';

const BookDetail = () => (
  <Layout>
    <Container>
      <Flex flexDirection="column" ml="320px" mt="24px" gap="12px">
        <Title fontSize="2.125rem" lineHeight="2.5rem" as="h1" my="0">
          O duque e eu: O livro de Daphne
        </Title>
        <Text color={COLORS.GRAY_300} fontSize="1.5rem">
          Julia Quinn
        </Text>
      </Flex>
    </Container>
    <BookCardDetail />
  </Layout>
);

export default BookDetail;
