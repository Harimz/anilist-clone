import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const SidebarItem = ({ type, item }) => {
  return (
    <Flex mb="1rem">
      <Box>
        <Text color="gray.200" fontWeight="bold">
          {type}
        </Text>

        <Text color="gray.400" fontSize="0.85rem">
          {item ? item : "NA"}
        </Text>
      </Box>
    </Flex>
  );
};
