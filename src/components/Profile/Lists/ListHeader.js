import React from "react";
import { Flex, Spacer, Text, useColorMode, Grid } from "@chakra-ui/react";

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
        display={{ base: "none", md: "flex" }}
      >
        <Text>Title</Text>
        <Spacer />
        <Grid
          gridTemplateColumns="repeat(3, 4rem)"
          gridGap={{ base: "1rem", md: "5rem" }}
          placeItems="center"
        >
          <Text>Score</Text>
          <Text>Progress</Text>
          <Text>Type</Text>
        </Grid>
      </Flex>
    </>
  );
};
