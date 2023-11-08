import styled from 'styled-components';
import { Flex, Text } from '../ui';

interface BookCardProps {
  image: string;
  title: string;
  author: string;
}

const BookCard: React.FC<BookCardProps> = ({ image, title, author }) => (
  <Card flexDirection="column" width="100%" flex="1" gap="4px">
    <img src={image} alt="book" />
    <Text level="large" className="title">
      {title}
    </Text>
    <Text>{author}</Text>
  </Card>
);

const Card = styled(Flex)`
  img {
    border-radius: 8px;
    width: 100%;
    height: 198px;
    object-fit: cover;
    margin-bottom: 8px;
  }

  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Number of lines to show */
    -webkit-box-orient: vertical;
  }
`;

export default BookCard;
