import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { VscError } from "react-icons/vsc";

export const ErrorBox = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      bgColor="red.100"
      padding="1rem"
      borderRadius="0.5rem"
    >
      {children}
    </Flex>
  );
};
