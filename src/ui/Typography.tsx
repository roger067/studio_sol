import styled from 'styled-components';
import {
  space,
  typography,
  color,
  SpaceProps,
  TypographyProps,
  ColorProps,
} from 'styled-system';
import { COLORS } from '.';

interface TypographyPropsExtended
  extends SpaceProps,
    TypographyProps,
    ColorProps {
  transform?: string;
}

export const BaseTypography = styled.div.withConfig({
  shouldForwardProp: (prop) => !typography?.propNames?.includes(prop),
})<TypographyPropsExtended>`
  text-transform: ${({ transform }) => transform || 'none'};

  ${space}
  ${typography}
  ${color}
`;

export const H1 = styled(BaseTypography).attrs({ as: 'h1' })`
  font-size: ${({ fontSize }) => (fontSize as string) || '5rem'};
  font-weight: 900;
  line-height: ${({ lineHeight }) => (lineHeight as string) || '5.5rem'};
  color: ${({ color }) => color || COLORS.GRAY_300};
`;

export const H2 = styled(BaseTypography).attrs({ as: 'h2' })`
  font-size: ${({ fontSize }) => (fontSize as string) || '3.5rem'};
  font-weight: 900;
  line-height: ${({ lineHeight }) => (lineHeight as string) || '3.85rem'};
  color: ${({ color }) => color || COLORS.GRAY_300};
`;

export const H3 = styled(BaseTypography).attrs({ as: 'h3' })`
  font-size: ${({ fontSize }) => (fontSize as string) || '2.5rem'};
  font-weight: 900;
  line-height: ${({ lineHeight }) => (lineHeight as string) || '2.75rem'};
  color: ${({ color }) => color || COLORS.GRAY_300};
`;

export const H4 = styled(BaseTypography).attrs({ as: 'h4' })`
  font-size: ${({ fontSize }) => (fontSize as string) || '1.5rem'};
  font-weight: 600;
  line-height: ${({ lineHeight }) => (lineHeight as string) || '2.25rem'};
  color: ${({ color }) => color || COLORS.GRAY_300};
`;

export const Text = styled(BaseTypography).attrs({ as: 'span' })`
  font-size: ${({ fontSize }) => (fontSize as string) || '1.125rem'};
  font-weight: 600;
  line-height: ${({ lineHeight }) => (lineHeight as string) || '1.5rem'};
  color: ${({ color }) => color || COLORS.GRAY_300};
`;
