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
  level?: 'default' | 'large';
}

const textBaseStyle = {
  default: {
    weight: '400',
    size: '0.875rem',
    lineHeight: '1rem',
  },
  large: { weight: '700', size: '1rem', lineHeight: '1.25rem' },
};

export const BaseTypography = styled.div.withConfig({
  shouldForwardProp: (prop) => !typography?.propNames?.includes(prop),
})<TypographyPropsExtended>`
  text-transform: ${({ transform }) => transform || 'none'};

  ${space}
  ${typography}
  ${color}
`;

export const Title = styled(BaseTypography).attrs({ as: 'h2' })`
  font-size: ${({ fontSize }) => (fontSize as string) || '1.75rem'};
  font-weight: ${({ fontWeight }) => (fontWeight as string) || '700'};
  line-height: ${({ lineHeight }) => (lineHeight as string) || '2rem'};
  color: ${({ color }) => color || COLORS.GRAY_500};
`;

export const Text = styled(BaseTypography).attrs({ as: 'span' })`
  font-size: ${({ fontSize, level = 'default' }) =>
    (fontSize as string) || textBaseStyle[level].size};
  font-weight: ${({ fontWeight, level = 'default' }) =>
    (fontWeight as string) || textBaseStyle[level].weight};
  line-height: ${({ lineHeight, level = 'default' }) =>
    (lineHeight as string) || textBaseStyle[level].lineHeight};
  color: ${({ color }) => color || COLORS.GRAY_500};
`;
