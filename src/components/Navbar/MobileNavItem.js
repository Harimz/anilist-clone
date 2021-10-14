import { Icon } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/layout";
import React from "react";

export const MobileNavItem = ({ icon, text, ...restProps }) => {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      _hover={{ color: "blue", stroke: "blue" }}
      {...restProps}
    >
      <Icon
        as={icon}
        h={6}
        w={6}
        style={{ color: "#748899" }}
        _groupHover={{ color: "blue" }}
      />
      <Text color="gray.600" mt="0.25rem" fontSize="sm">
        {text}
      </Text>
    </Flex>
  );
};
