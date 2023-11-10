import styled from 'styled-components';

import { COLORS, Flex, Text } from '../ui';

interface AuthorCardProps {
  image: string;
  quantity: number;
  name: string;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ image, quantity, name }) => (
  <Card gap="16px" alignItems="center" pr="16px">
    <img src={image} alt="author" />
    <Flex flexDirection="column" gap="6px">
      <Text level="large">{name}</Text>
      <Text color={COLORS.GRAY_400}>{quantity} livros</Text>
    </Flex>
  </Card>
);

const Card = styled(Flex)`
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${COLORS.GRAY_100};

  span {
    text-wrap: nowrap;
  }

  img {
    width: 68px;
    height: 68px;
    object-fit: cover;
    border-radius: 7px;
  }
`;

export default AuthorCard;
