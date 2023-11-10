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
  Swiper,
} from '../ui';
import { BOOK_CATEGORIES } from '../services/types';
import {
  useGetAuthorsQuery,
  useGetBooksQuery,
  useGetFavoriteBooksQuery,
} from '../services/booksApi';

const BookList = () => {
  const [activePill, setActivePill] = useState('all');
  const { data } = useGetFavoriteBooksQuery();
  const { data: booksData } = useGetBooksQuery();
  const { data: authorsData } = useGetAuthorsQuery();

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
        <Tab items={items} activeKey="my-books" className="sm-hidden" />
        <Flex justifyContent="space-between" alignItems="flex-end" my="24px">
          <Title margin="0">Livros favoritos</Title>
          <Text level="large" color={COLORS.PURPLE_100}>
            ver mais
          </Text>
        </Flex>
        <Swiper gap="24px">
          {data &&
            data.favoriteBooks.map((book) => (
              <BookCard
                key={book.id}
                linkTo={`/${book.id}`}
                image={book.cover}
                title={book.name}
                author={book.author.name}
              />
            ))}
        </Swiper>
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
          <Swiper gap="24px">
            {authorsData &&
              authorsData.favoriteAuthors.map((author) => (
                <AuthorCard
                  key={author.id}
                  image={author.picture}
                  name={author.name}
                  quantity={author.booksCount}
                />
              ))}
          </Swiper>
          <Title mt="40px" mb="24px">
            Biblioteca
          </Title>
          <FilterPill
            items={categories}
            activePill={activePill}
            onChange={(key) => setActivePill(key)}
          />
          <Flex mt="24px" mb="56px" gap="24px" flexWrap="wrap">
            {booksData &&
              booksData.allBooks.map((book) => (
                <BookCard
                  key={book.id}
                  linkTo={`/${book.id}`}
                  image={book.cover}
                  title={book.name}
                  author={book.author.name}
                  direction="horizontal"
                />
              ))}
          </Flex>
        </Container>
      </Card>
    </Layout>
  );
};

export default BookList;
