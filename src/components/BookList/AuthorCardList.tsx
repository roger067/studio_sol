import { AuthorCard } from '..';
import { useGetAuthorsQuery } from '../../services/booksApi';
import { Swiper } from '../../ui';

const AuthorCardList = () => {
  const { data, isLoading } = useGetAuthorsQuery();

  return (
    <Swiper gap="24px">
      {data &&
        data.favoriteAuthors.map((author) => (
          <AuthorCard
            key={author.id}
            image={author.picture}
            name={author.name}
            quantity={author.booksCount}
          />
        ))}
    </Swiper>
  );
};

export default AuthorCardList;
