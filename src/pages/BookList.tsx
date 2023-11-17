import { useState } from 'react';
import {
  BookCardList,
  Layout,
  AuthorCardList,
  AllBooksList,
} from '../components';
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

  const tabItems = [
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
        <Tab items={tabItems} activeKey="my-books" className="sm-hidden" />
        <Flex justifyContent="space-between" alignItems="flex-end" my="24px">
          <Title margin="0">Livros favoritos</Title>
          <Text level="large" color={COLORS.PURPLE_100}>
            ver mais
          </Text>
        </Flex>
        <BookCardList />
      </Container>
      <Card mt="24px" flex="1">
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
          <AuthorCardList />
          <Title mt="40px" mb="24px">
            Biblioteca
          </Title>
          <FilterPill
            items={categories}
            activePill={activePill}
            onChange={(key) => setActivePill(key)}
          />
          <AllBooksList />
        </Container>
      </Card>
    </Layout>
  );
};

export default BookList;
