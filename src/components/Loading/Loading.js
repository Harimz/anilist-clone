import React from "react";
import { Container, Spinner } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Container maxW="container.xl" mt="3rem" centerContent>
      <Spinner color="white" />
    </Container>
  );
};
