import styled from 'styled-components';

import { COLORS, Flex, Text } from '../ui';

import { ReactComponent as ArrowLeft } from '../assets/icons/arrow-left.svg';
import { ReactComponent as Ellipse } from '../assets/icons/ellipse.svg';
import { ReactComponent as Heart } from '../assets/icons/heart.svg';
import { ReactComponent as Share } from '../assets/icons/share.svg';
import { ReactComponent as Download } from '../assets/icons/download.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const BookBackground: React.FC<{ urlImage: string }> = ({ urlImage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <BookSection urlImage={urlImage}>
      <Flex justifyContent="space-between" alignItems="center" padding="16px">
        <Link to="/">
          <ArrowLeft />
        </Link>
        <Dropdown>
          <Ellipse onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
          {isDropdownOpen && (
            <Flex flexDirection="column" mt="16px" gap="16px" className="menu">
              <Flex gap="12px" alignItems="center" className="menu-item">
                <Heart />
                <Text fontWeight={700}>Favoritar</Text>
              </Flex>
              <Flex gap="12px" alignItems="center" className="menu-item">
                <Share />
                <Text fontWeight={700}>Compartilhar</Text>
              </Flex>
              <Flex gap="12px" alignItems="center" className="menu-item">
                <Download />
                <Text fontWeight={700}>Salvar em uma lista</Text>
              </Flex>
            </Flex>
          )}
        </Dropdown>
      </Flex>
    </BookSection>
  );
};

const BookSection = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'urlImage',
})<{ urlImage?: string }>`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: ${({ urlImage }) => `url(${urlImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 5;

  &:after {
    position: absolute;
    content: ' ';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Dropdown = styled.div`
  position: relative;

  .menu {
    position: absolute;
    background-color: ${COLORS.WHITE};
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
    padding: 12px;
    border-radius: 16px;
    top: 16px;
    right: 0;
  }
`;

export default BookBackground;
