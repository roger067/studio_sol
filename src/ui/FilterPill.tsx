import styled from 'styled-components';
import { COLORS, Flex, Text } from '.';

interface FilterPillProps {
  activePill: string;
  items: { label: string; key: string }[];
  onChange: (key: string) => void;
}

const FilterPill: React.FC<FilterPillProps> = ({
  activePill,
  items,
  onChange,
}) => (
  <Flex gap="8px">
    {items.map((item) => (
      <Pill
        key={item.key}
        onClick={() => onChange(item.key)}
        className={activePill === item.key ? 'active' : ''}
      >
        <Text>{item.label}</Text>
      </Pill>
    ))}
  </Flex>
);

const Pill = styled.button`
  width: fit-content;
  padding: 8px 16px;
  border-radius: 32px;
  border: 1px solid ${COLORS.GRAY_200};
  background-color: ${COLORS.WHITE};
  transition: all 250ms ease-in-out;
  cursor: pointer;

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: ${COLORS.GRAY_400};
  }

  &:hover {
    background-color: ${COLORS.GRAY_200};
  }

  &.active {
    background-color: ${COLORS.PURPLE_100};
    border: 1px solid ${COLORS.PURPLE_100};

    span {
      color: ${COLORS.WHITE};
    }
  }
`;

export default FilterPill;
