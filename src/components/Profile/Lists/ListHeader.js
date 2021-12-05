import React from "react";
import { Flex, Spacer, Text, useColorMode } from "@chakra-ui/react";

export const ListHeader = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <Text color="gray.400" fontSize="1.5rem" m="2rem">
        Watching
      </Text>
      <Flex
        bgColor={isDark ? "blue.400" : "white"}
        p={{ base: "1rem", md: "1rem 4rem" }}
        color="gray.400"
        fontWeight="semibold"
      >
        <Text>Title</Text>
        <Spacer />
        <Flex gridGap={{ base: "1rem", md: "5rem" }}>
          <Text>Score</Text>
          <Text>Progress</Text>
          <Text>Type</Text>
        </Flex>
      </Flex>
    </>
  );
};
