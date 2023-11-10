import styled from 'styled-components';
import { COLORS, Flex, Text } from '../ui';

interface BookCardProps {
  image: string;
  title: string;
  author: string;
  direction?: 'vertical' | 'horizontal';
}

const BookCard: React.FC<BookCardProps> = ({
  image,
  title,
  author,
  direction = 'vertical',
}) => {
  const isHorizontal = direction === 'horizontal';

  return (
    <Card
      flexDirection={isHorizontal ? 'row' : 'column'}
      alignItems={isHorizontal ? 'center' : 'normal'}
      width={isHorizontal ? 'calc(33.3% - 16px)' : '100%'}
      gap={isHorizontal ? '24px' : '12px'}
      isHorizontal={isHorizontal}
    >
      <img src={image} alt="book" />
      <Flex flexDirection="column">
        <Text level="large" className="title" mb="4px">
          {title}
        </Text>
        <Text color={COLORS.GRAY_400}>{author}</Text>
      </Flex>
    </Card>
  );
};

const Card = styled(Flex)<{ isHorizontal: boolean }>`
  img {
    border-radius: 8px;
    width: ${({ isHorizontal }) => (isHorizontal ? '68px' : '100%')};
    height: ${({ isHorizontal }) => (isHorizontal ? '100px' : '198px')};
    object-fit: cover;
  }

  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({ isHorizontal }) => (isHorizontal ? '3' : '2')};
    -webkit-box-orient: vertical;
  }
`;

export default BookCard;
