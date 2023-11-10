import { BookCard } from '..';
import { useGetBooksQuery } from '../../services/booksApi';
import { Flex } from '../../ui';

const AllBookList = () => {
  const { data } = useGetBooksQuery();

  return (
    <Flex mt="24px" mb="56px" gap="24px" flexWrap="wrap">
      {data &&
        data.allBooks.map((book) => (
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
  );
};

export default AllBookList;
