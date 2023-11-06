import styled from 'styled-components';
import {
  flexbox,
  space,
  layout,
  FlexboxProps,
  SpaceProps,
  LayoutProps,
} from 'styled-system';

interface FlexProps extends FlexboxProps, SpaceProps, LayoutProps {
  gap?: string;
}

const Flex = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      ...flexbox.propNames!,
      ...space.propNames!,
      ...layout.propNames!,
    ]?.includes(prop),
})<FlexProps>`
  display: flex;
  gap: ${(props) => props.gap || 'normal normal'};
  ${flexbox}
  ${space}
  ${layout}
`;

export default Flex;
