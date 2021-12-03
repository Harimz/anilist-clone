import React from "react";
import { Container, Flex, Heading } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

export const Header = ({ user }) => {
  return (
    <Flex bgColor="rgba(42, 25, 54, 0.47)">
      <Container maxW="container.xl" mt="5rem">
        <Flex align="flex-end">
          <Image src={user.pic} h={{ base: "8rem", md: "11rem" }} />
          <Heading mb="2rem" color="white" fontSize="1.5rem">
            {user.username}
          </Heading>
        </Flex>
      </Container>
    </Flex>
  );
};
