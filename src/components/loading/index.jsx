import { Container, Flex, Text } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Container>
      <Flex justify={"center"} alignItems={"center"} h={"100vh"}>
        <Text>Loading....</Text>
      </Flex>
    </Container>
  );
};

export default Loading;
