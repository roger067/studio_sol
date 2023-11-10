import styled from 'styled-components';
import { COLORS, Flex, Text } from '../../ui';
import { useNavigate } from 'react-router-dom';

interface BookCardProps {
  image: string;
  title: string;
  author: string;
  linkTo?: string;
  direction?: 'vertical' | 'horizontal';
}

const BookCard: React.FC<BookCardProps> = ({
  image,
  title,
  author,
  linkTo = '',
  direction = 'vertical',
}) => {
  const isHorizontal = direction === 'horizontal';
  const navigate = useNavigate();

  return (
    <Card
      flexDirection={isHorizontal ? 'row' : 'column'}
      alignItems={isHorizontal ? 'center' : 'normal'}
      gap={isHorizontal ? '24px' : '12px'}
      isHorizontal={isHorizontal}
      onClick={() => navigate(linkTo)}
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

const Card = styled(Flex).withConfig({
  shouldForwardProp: (prop) => prop !== 'isHorizontal',
})<{ isHorizontal: boolean }>`
  width: ${({ isHorizontal }) =>
    isHorizontal ? 'calc(33.3% - 16px)' : '100%'};

  cursor: pointer;

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

  @media (max-width: 768px) {
    width: 100%;
    max-width: ${({ isHorizontal }) => (isHorizontal ? '100%' : '136px')};
    min-width: ${({ isHorizontal }) => (isHorizontal ? '100%' : '136px')};
  }
`;

export default BookCard;
