import styled from 'styled-components';
import { COLORS, Container, Flex, Input, Tab, Text } from '../../ui';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Heart } from '../../assets/icons/heart.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { Link } from 'react-router-dom';
import { useGetUserPhotoQuery } from '../../services/booksApi';

interface HeaderProps {
  hideOnMobileDevice?: boolean;
}

const Header: React.FC<HeaderProps> = ({ hideOnMobileDevice = false }) => {
  const { data } = useGetUserPhotoQuery();

  const tabItems = [
    { key: 'my-books', label: 'Meus livros' },
    { key: 'borrowed', label: 'Emprestados' },
  ];

  return (
    <HeaderTag hideOnMobileDevice={hideOnMobileDevice}>
      <Container float="right">
        <Flex justifyContent="space-between" alignItems="center">
          <Link to="/">
            <Logo />
          </Link>
          <Flex gap="24px">
            <Flex alignItems="center" ml="24px" className="menu-item">
              <Input />
            </Flex>
            <Flex gap="12px" alignItems="center" className="menu-item">
              <Plus />
              <Text fontWeight={700}>Adicionar</Text>
            </Flex>
            <Flex gap="12px" alignItems="center" className="menu-item">
              <Heart />
              <Text fontWeight={700}>Favoritos</Text>
            </Flex>
            <Flex gap="12px" alignItems="center" className="user">
              <Avatar src={data?.userPicture} alt="user" />
              <Text fontWeight={700}>Nome da silva</Text>
            </Flex>
          </Flex>
        </Flex>
        <Tab items={tabItems} activeKey="my-books" />
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

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${COLORS.GRAY_100};
`;

export default Header;
