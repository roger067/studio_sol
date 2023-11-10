import styled from 'styled-components';

import { COLORS, Flex, Text } from '../ui';

import { ReactComponent as Heart } from '../assets/icons/heart.svg';
import { ReactComponent as Plus } from '../assets/icons/plus.svg';
import { ReactComponent as Home } from '../assets/icons/home.svg';
import { ReactComponent as Search } from '../assets/icons/search.svg';

interface FixedMenuProps {
  currentRoute: string;
}

const FixedMenu: React.FC<FixedMenuProps> = ({ currentRoute }) => (
  <Menu padding="11px 16px" gap="16px">
    <Flex
      padding="0px 16px"
      flexDirection="column"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      className={currentRoute === 'home' ? 'active' : ''}
    >
      <Home />
      <Text
        fontSize="0.625rem"
        fontWeight={500}
        lineHeight="0.625rem"
        color={COLORS.GRAY_300}
      >
        Início
      </Text>
    </Flex>
    <Flex
      padding="0px 16px"
      flexDirection="column"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      className={currentRoute === 'add' ? 'active' : ''}
    >
      <Plus />
      <Text
        fontSize="0.625rem"
        fontWeight={500}
        lineHeight="0.625rem"
        color={COLORS.GRAY_300}
      >
        Adicionar
      </Text>
    </Flex>
    <Flex
      padding="0px 16px"
      flexDirection="column"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      className={currentRoute === 'search' ? 'active' : ''}
    >
      <Search />
      <Text
        fontSize="0.625rem"
        fontWeight={500}
        lineHeight="0.625rem"
        color={COLORS.GRAY_300}
      >
        Buscar
      </Text>
    </Flex>
    <Flex
      padding="0px 16px"
      flexDirection="column"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      className={currentRoute === 'fav' ? 'active' : ''}
    >
      <Heart />
      <Text
        fontSize="0.625rem"
        fontWeight={500}
        lineHeight="0.625rem"
        color={COLORS.GRAY_300}
      >
        Favoritos
      </Text>
    </Flex>
  </Menu>
);

const Menu = styled(Flex)`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 15;
  background-color: ${COLORS.WHITE};
  box-shadow: 0px -2px 8px 0px rgba(0, 0, 0, 0.08);

  svg path {
    fill: ${COLORS.GRAY_300};
  }

  .active {
    span {
      color: ${COLORS.PURPLE_100};
    }

    svg path {
      fill: ${COLORS.PURPLE_100};
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default FixedMenu;
