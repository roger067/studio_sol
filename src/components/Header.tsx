import styled from 'styled-components';
import { COLORS, Container, Flex } from '../ui';

import { ReactComponent as Logo } from '../assets/logo.svg';

const Header = () => (
  <HeaderTag>
    <Container>
      <Flex>
        <Logo />
      </Flex>
    </Container>
  </HeaderTag>
);

const HeaderTag = styled.header`
  width: 100%;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  padding: 12px;
  border-radius: 0 0 32px 0;
  background-color: ${COLORS.WHITE};
`;

export default Header;
