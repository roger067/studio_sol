import styled from 'styled-components';
import { COLORS, Container, Flex, Tab, Text } from '../ui';

import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Heart } from '../assets/icons/heart.svg';
import { ReactComponent as Plus } from '../assets/icons/plus.svg';

interface HeaderProps {
  hideOnMobileDevice?: boolean;
}

const Header: React.FC<HeaderProps> = ({ hideOnMobileDevice = false }) => {
  const items = [
    { key: 'my-books', label: 'Meus livros' },
    { key: 'borrowed', label: 'Emprestados' },
  ];

  return (
    <HeaderTag hideOnMobileDevice={hideOnMobileDevice}>
      <Container float="right">
        <Flex justifyContent="space-between" alignItems="center">
          <Logo />
          <Flex gap="24px">
            <Flex gap="12px" alignItems="center" className="menu-item">
              <Plus />
              <Text fontWeight={700}>Adicionar</Text>
            </Flex>
            <Flex gap="12px" alignItems="center" className="menu-item">
              <Heart />
              <Text fontWeight={700}>Favoritos</Text>
            </Flex>
            <Flex gap="12px" alignItems="center" className="user">
              <Avatar />
              <Text fontWeight={700}>Nome da silva</Text>
            </Flex>
          </Flex>
        </Flex>
        <Tab items={items} activeKey="my-books" />
      </Container>
    </HeaderTag>
  );
};

const HeaderTag = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== 'hideOnMobileDevice',
})<{ hideOnMobileDevice: boolean }>`
  width: 100%;
  max-width: calc(16px + 1140px + (100vw - 1140px) / 2);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  padding: 16px 16px 16px 0;
  border-radius: 0 0 32px 0;
  background-color: ${COLORS.WHITE};

  .user {
    padding: 4px 0 4px 24px;
    border-left: 1px solid ${COLORS.GRAY_100};
  }

  .tab {
    display: none;
  }

  @media (max-width: 768px) {
    display: ${({ hideOnMobileDevice }) =>
      hideOnMobileDevice ? 'none' : 'block'};

    padding-bottom: 0;

    .menu-item {
      display: none;
    }

    .user {
      padding: 0;
      border: none;

      span {
        display: none;
      }
    }

    .tab {
      display: flex;
      border-bottom: none;
      margin-top: 8px;

      span {
        font-size: 0.875rem;
        line-height: 1rem;
      }
    }
  }
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${COLORS.GRAY_100};
`;

export default Header;
