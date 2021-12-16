import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import { useIsDark } from "../hooks";

export const NotFound = () => {
  const { isDark } = useIsDark();

  return (
    <Container centerContent mt="10rem" mb="30rem">
      <Heading color={isDark ? "white" : "black"}>Page not found :(</Heading>
    </Container>
  );
};
