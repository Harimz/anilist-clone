import { Flex, Text } from "@chakra-ui/layout";
import React from "react";

export const MobileNavItem = ({ icon, text }) => {
  return (
    <Flex align="center" justify="center" direction="column">
      {icon}
      <Text color="gray.600" mt="0.25rem" fontSize="sm">
        {text}
      </Text>
    </Flex>
  );
};
