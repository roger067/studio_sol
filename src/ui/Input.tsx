import styled from 'styled-components';

import { ReactComponent as Search } from '../assets/icons/search.svg';
import { COLORS } from '.';

const Input = () => (
  <InputWrapper>
    <input placeholder="Busque um livro" />
    <Search />
  </InputWrapper>
);

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40px;

  input {
    width: 100%;
    height: 100%;
    padding: 6px 48px 6px 16px;
    border-radius: 8px;
    border: 1px solid ${COLORS.GRAY_200};
    color: ${COLORS.GRAY_400};
    font-family: 'Roboto', sans-serif;

    &::placeholder {
      color: ${COLORS.GRAY_400};
      font-weight: 400;
      font-size: 0.875rem;
    }
  }

  svg {
    position: absolute;
    top: 8px;
    right: 12px;
  }

  @media (min-width: 992px) {
    min-width: 448px;
  }
`;

export default Input;
