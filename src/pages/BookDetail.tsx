import { Layout, BookCardDetail, BookBackground } from '../components';
import { Container, Title, Text, Flex, COLORS } from '../ui';

const BookDetail = () => (
  <Layout hideOnMobileDevice>
    <Container>
      <Flex
        flexDirection="column"
        ml="320px"
        display={['none', 'flex']}
        mt="24px"
        gap="12px"
      >
        <Title fontSize="2.125rem" lineHeight="2.5rem" as="h1" my="0">
          O duque e eu: O livro de Daphne
        </Title>
        <Text color={COLORS.GRAY_300} fontSize="1.5rem">
          Julia Quinn
        </Text>
      </Flex>
    </Container>
    <BookBackground />
    <BookCardDetail />
  </Layout>
);

export default BookDetail;
