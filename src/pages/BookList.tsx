import { BookCard, Layout } from '../components';
import { Container, Title, Tab, Flex, Text, COLORS } from '../ui';

const BookList = () => {
  const items = [
    { key: 'my-books', label: 'Meus livros' },
    { key: 'borrowed', label: 'Emprestados' },
  ];

  return (
    <Layout>
      <Container>
        <Tab items={items} activeKey="my-books" />
        <Flex justifyContent="space-between" alignItems="flex-end" my="32px">
          <Title margin="0">Livros favoritos</Title>
          <Text level="large" color={COLORS.PURPLE_100}>
            ver mais
          </Text>
        </Flex>
        <Flex gap="24px">
          <BookCard
            image="https://picsum.photos/300"
            title="O duque e eu (Os Bridgertons – Livro 1): O livro de Daphne"
            author="Julia Quinn"
          />
          <BookCard image="https://picsum.photos/300" author="" title="" />
          <BookCard image="https://picsum.photos/300" author="" title="" />
          <BookCard image="https://picsum.photos/300" author="" title="" />
          <BookCard image="https://picsum.photos/300" author="" title="" />
          <BookCard image="https://picsum.photos/300" author="" title="" />
        </Flex>
      </Container>
    </Layout>
  );
};

export default BookList;
