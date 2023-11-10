import { Flex, Text } from '.';

interface ErrorMessageProps {
  title: string;
  description: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ title, description }) => (
  <Flex
    flexDirection="column"
    width="100%"
    alignItems="center"
    my="32px"
    gap="8px"
  >
    <Text level="large">{title}</Text>
    <Text>{description}</Text>
  </Flex>
);

export default ErrorMessage;
