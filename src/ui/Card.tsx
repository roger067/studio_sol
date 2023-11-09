import styled from 'styled-components';
import { COLORS, Flex } from '.';

const Card = styled(Flex)`
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  padding: 32px 16px;
  background-color: ${COLORS.WHITE};
  border-radius: 32px 0 0 0;
  width: 100%;
  max-width: calc(16px + 1140px + (100vw - 1140px) / 2);
  margin-left: auto;
`;

export default Card;
