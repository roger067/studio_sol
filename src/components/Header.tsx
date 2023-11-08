import styled from 'styled-components';
import { COLORS, Container, Flex, Text } from '../ui';

import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Heart } from '../assets/icons/heart.svg';
import { ReactComponent as Plus } from '../assets/icons/plus.svg';

const Header = () => (
  <HeaderTag>
    <Container>
      <Flex justifyContent="space-between" alignItems="center">
        <Logo />
        <Flex gap="24px">
          <Flex gap="12px" alignItems="center">
            <Plus />
            <Text fontWeight={700}>Adicionar</Text>
          </Flex>
          <Flex gap="12px" alignItems="center">
            <Heart />
            <Text fontWeight={700}>Favoritos</Text>
          </Flex>
          <Flex gap="12px" alignItems="center" className="user">
            <Avatar />
            <Text fontWeight={700}>Nome da silva</Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  </HeaderTag>
);

const HeaderTag = styled.header`
  width: 100%;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  padding: 24px 0;
  border-radius: 0 0 32px 0;
  background-color: ${COLORS.WHITE};

  .user {
    padding: 4px 0 4px 24px;
    border-left: 1px solid ${COLORS.GRAY_100};
  }
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${COLORS.GRAY_100};
`;

export default Header;
