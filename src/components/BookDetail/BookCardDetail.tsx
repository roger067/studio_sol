import styled from 'styled-components';
import { COLORS, Card, Container, Flex, Text, Title } from '../../ui';

import { ReactComponent as Heart } from '../../assets/icons/heart.svg';
import { ReactComponent as Share } from '../../assets/icons/share.svg';
import { ReactComponent as Download } from '../../assets/icons/download.svg';

interface BookCardDetailProps {
  urlImage: string;
  title: string;
  description: string;
  author: string;
  isFavorite: boolean;
}

const BookCardDetail: React.FC<BookCardDetailProps> = ({
  urlImage,
  title,
  author,
  description,
  isFavorite,
}) => (
  <CardDetailTag mt="32px">
    <Container float="left" className="content">
      <Flex
        flex="1"
        maxWidth="296px"
        flexDirection="column"
        gap="16px"
        className="side-info"
      >
        <img src={urlImage} alt="book-cover" />
        <Flex flexDirection="column" mt="16px" gap="24px">
          <Flex gap="12px" alignItems="center" className="menu-item">
            <Heart />
            <Text fontSize="1.125rem" fontWeight={700}>
              Favoritar
            </Text>
          </Flex>
          <Flex gap="12px" alignItems="center" className="menu-item">
            <Share />
            <Text fontSize="1.125rem" fontWeight={700}>
              Compartilhar
            </Text>
          </Flex>
          <Flex gap="12px" alignItems="center" className="menu-item">
            <Download />
            <Text fontSize="1.125rem" fontWeight={700}>
              Salvar em uma lista
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex flex="2" flexDirection="column">
        <Flex
          flexDirection="column"
          display={['flex', 'flex', 'none']}
          gap="12px"
          mb="24px"
        >
          <Flex
            alignItems="center"
            width="100%"
            gap="16px"
            justifyContent="space-between"
          >
            <Title
              fontSize={['1.25rem', '1.75rem', '1.75rem']}
              lineHeight="1.5rem"
              as="h1"
              my="0"
            >
              {title}
            </Title>
            <Flex className={`icon-wrapper ${isFavorite ? 'active' : ''}`}>
              <Heart />
            </Flex>
          </Flex>
          <Text color={COLORS.GRAY_400}>{author}</Text>
        </Flex>
        <Text fontSize={['1rem', '1.125rem']} mb="16px" lineHeight="1.5rem">
          {description}
        </Text>
        <Title my="24px" fontSize={['1.125rem', '1.75rem']}>
          Sobre o Autor
        </Title>
        <Text fontSize={['1rem', '1.125rem']} mb="16px" lineHeight="1.5rem">
          {author} começou a trabalhar em seu primeiro romance um mês de - pois
          de terminar a faculdade e nunca mais parou de escrever. Seus livros
          foram traduzidos para 37 idiomas e, no Brasil, venderam mais de 2,5
          milhões de exemplares. A série Os Bridgertons foi adaptada pela
          Netflix e se tornou um sucesso instantâneo, quebrando os recordes de
          audiência da plataforma. Julia foi a autora mais jovem a ser incluída
          na Galeria da Fama dos Escritores Românticos dos Estados Unidos.
        </Text>
      </Flex>
    </Container>
  </CardDetailTag>
);

const CardDetailTag = styled(Card)`
  min-height: 70%;
  padding-bottom: 80px;
  z-index: 10;

  .content {
    display: flex;
    height: 100%;
    gap: 32px;
  }

  img {
    width: 100%;
    height: 433px;
    object-fit: cover;
    border-radius: 8px;
    margin-top: -132px;
  }

  .menu-item {
    cursor: pointer;

    span {
      transition: color 250ms ease-in-out;
    }

    svg > path {
      transition: fill 250ms ease-in-out;
    }

    &:hover {
      span {
        color: ${COLORS.PURPLE_100};
      }

      svg > path {
        fill: ${COLORS.PURPLE_100};
      }
    }
  }

  .icon-wrapper.active {
    svg path {
      fill: ${COLORS.PURPLE_100};
    }
  }

  @media (max-width: 832px) {
    img {
      margin-top: 0;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    bottom: 0;
    overflow: auto;
    max-height: 55%;
    padding: 32px 0 56px 0;

    .side-info {
      display: none;
    }
  }
`;

export default BookCardDetail;
