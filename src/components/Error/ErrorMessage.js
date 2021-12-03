import React from "react";
import { Container, Heading } from "@chakra-ui/react";

export const ErrorMessage = () => {
  return (
    <Container centerContent>
      <Heading>Something went wrong, please reload the page.</Heading>
    </Container>
  );
};
