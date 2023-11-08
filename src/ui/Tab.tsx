import styled from 'styled-components';

import { COLORS, Flex, Text } from '.';

interface TabProps {
  items: { key: string; label: string }[];
  activeKey?: string;
  onChange?: (key: string) => void;
}

const Tab: React.FC<TabProps> = ({ items, activeKey, onChange }) => (
  <TabWrapper mt="32px" gap="20px">
    {items.map((item) => (
      <button
        key={item.key}
        className={item.key === activeKey ? 'active' : ''}
        onClick={() => onChange && onChange(item.key)}
      >
        <Text level="large">{item.label}</Text>
      </button>
    ))}
  </TabWrapper>
);

const TabWrapper = styled(Flex)`
  border-bottom: 1px solid ${COLORS.GRAY_100};

  button {
    border: none;
    background-color: transparent;
    padding: 16px;
    border-radius: 16px 16px 0 0;
    cursor: pointer;
    transition: background-color 250ms ease-in-out;

    &.active {
      border-bottom: 4px solid ${COLORS.PURPLE_100};
    }

    &:hover {
      background-color: ${COLORS.GRAY_100};
    }
  }
`;

export default Tab;
