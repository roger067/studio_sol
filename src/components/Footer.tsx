import styled from 'styled-components';

import { COLORS, Container, Flex, Text } from '../ui';

import { ReactComponent as Logo } from '../assets/logo-white.svg';

const Footer = () => (
  <FooterTag>
    <Container>
      <Flex justifyContent="space-between" alignItems="center">
        <Logo />
        <Flex flexDirection="column">
          <Text textAlign="right" color={COLORS.WHITE} fontSize="0.75rem">
            Todos os direitos reservados.
          </Text>
          <Text textAlign="right" color={COLORS.WHITE} fontSize="0.75rem">
            Studio Sol Books © 2023
          </Text>
        </Flex>
      </Flex>
    </Container>
  </FooterTag>
);

const FooterTag = styled.footer`
  width: 100%;
  background-color: ${COLORS.PURPLE_100};
  padding: 28px 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Footer;
