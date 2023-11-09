import styled from 'styled-components';

interface ContainerProps {
  float?: 'left' | 'center' | 'right';
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  margin-right: ${({ float = 'center' }) => (float === 'right' ? '0' : 'auto')};
  margin-left: ${({ float = 'center' }) => (float === 'left' ? '0' : 'auto')};

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (max-width: 1200px) {
    margin-right: auto;
    margin-left: auto;
  }
`;

export default Container;
