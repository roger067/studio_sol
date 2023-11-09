import { useState } from 'react';
import { AuthorCard, BookCard, Layout } from '../components';
import {
  Container,
  Title,
  Tab,
  Flex,
  Text,
  COLORS,
  Card,
  FilterPill,
} from '../ui';
import { BOOK_CATEGORIES } from '../services/types';

const BookList = () => {
  const [activePill, setActivePill] = useState('all');

  const items = [
    { key: 'my-books', label: 'Meus livros' },
    { key: 'borrowed', label: 'Emprestados' },
  ];

  const categories = [
    { key: 'all', label: 'Todos' },
    { key: 'romance', label: BOOK_CATEGORIES.ROMANCE },
    { key: 'adventure', label: BOOK_CATEGORIES.ADVENTURE },
    { key: 'comedy', label: BOOK_CATEGORIES.COMEDY },
    { key: 'horror', label: BOOK_CATEGORIES.HORROR },
    { key: 'technology', label: BOOK_CATEGORIES.ADVENTURE },
    { key: 'travel', label: BOOK_CATEGORIES.TRAVEL },
  ];

  return (
    <Layout>
      <Container>
        <Tab items={items} activeKey="my-books" />
        <Flex justifyContent="space-between" alignItems="flex-end" my="24px">
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
      <Card mt="24px">
        <Container float="left">
          <Flex
            justifyContent="space-between"
            alignItems="flex-end"
            flex="1"
            mb="24px"
          >
            <Title margin="0">Autores favoritos</Title>
            <Text level="large" color={COLORS.PURPLE_100}>
              ver mais
            </Text>
          </Flex>
          <Flex gap="24px">
            <AuthorCard
              image="https://picsum.photos/300"
              name="Julia Quinn"
              quantity={6}
            />
            <AuthorCard
              image="https://picsum.photos/300"
              name="Julia Quinn"
              quantity={6}
            />
            <AuthorCard
              image="https://picsum.photos/300"
              name="Julia Quinn"
              quantity={6}
            />
          </Flex>
          <Title mt="40px" mb="24px">
            Biblioteca
          </Title>
          <FilterPill
            items={categories}
            activePill={activePill}
            onChange={(key) => setActivePill(key)}
          />
        </Container>
      </Card>
    </Layout>
  );
};

export default BookList;
