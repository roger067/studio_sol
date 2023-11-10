import styled from 'styled-components';
import { Flex } from '.';

const Swiper = styled(Flex)`
  max-width: 100%;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Swiper;
