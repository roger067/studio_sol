import styled from 'styled-components';
import { COLORS, Card, Container, Flex, Text, Title } from '../ui';

import { ReactComponent as Heart } from '../assets/icons/heart.svg';
import { ReactComponent as Share } from '../assets/icons/share.svg';
import { ReactComponent as Download } from '../assets/icons/download.svg';

const BookCardDetail = () => (
  <CardDetailTag mt="32px">
    <Container float="left" className="content">
      <Flex
        flex="1"
        maxWidth="296px"
        flexDirection="column"
        gap="16px"
        className="side-info"
      >
        <img src="https://picsum.photos/300" alt="book-cover" />
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
          display={['flex', 'none']}
          gap="12px"
          mb="24px"
        >
          <Title fontSize="1.25rem" lineHeight="1.5rem" as="h1" my="0">
            O duque e eu: O livro de Daphne
          </Title>
          <Text color={COLORS.GRAY_400}>Julia Quinn</Text>
        </Flex>
        <Text fontSize={['1rem', '1.125rem']} mb="16px" lineHeight="1.5rem">
          Simon Basset, o irresistível duque de Hastings, acaba de retornar a
          Londres depois de seis anos viajando pelo mundo. Rico, bonito e
          solteiro, ele é um prato cheio para as mães da alta sociedade, que só
          pensam em arrumar um bom partido para suas filhas. Simon, porém, tem o
          firme propósito de nunca se casar. Assim, para se livrar das garras
          dessas mulheres, precisa de um plano infalível. É quando entra em cena
          Daphne Bridgerton, a irmã mais nova de seu melhor amigo. Apesar de
          espirituosa e dona de uma personalidade marcante, todos os homens que
          se interessam por ela são velhos demais, pouco inteligentes ou
          destituídos de qualquer tipo de charme. E os que têm potencial para
          ser bons maridos só a veem como uma boa amiga. A ideia de Simon é
          fingir que a corteja. Dessa forma, de uma tacada só, ele conseguirá
          afastar as jovens obcecadas por um marido e atrairá vários
          pretendentes para Daphne. Afinal, se um duque está interessado nela, a
          jovem deve ter mais atrativos do que aparenta.
        </Text>
        <Title my="24px" fontSize={['1.125rem', '1.75rem']}>
          Sobre o Autor
        </Title>
        <Text fontSize={['1rem', '1.125rem']} mb="16px" lineHeight="1.5rem">
          JULIA QUINN começou a trabalhar em seu primeiro romance um mês de -
          pois de terminar a faculdade e nunca mais parou de escrever. Seus
          livros foram traduzidos para 37 idiomas e, no Brasil, venderam mais de
          2,5 milhões de exemplares. A série Os Bridgertons foi adaptada pela
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

  @media (max-width: 768px) {
    position: absolute;
    bottom: 0;
    overflow: auto;
    max-height: 75%;
    padding: 32px 0 56px 0;

    .side-info {
      display: none;
    }
  }
`;

export default BookCardDetail;
