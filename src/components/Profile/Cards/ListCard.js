import React, { useState } from "react";
import { Image } from "@chakra-ui/image";
import { Flex, Spacer, Text } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";

export const ListCard = ({ anime, manga }) => {
  const [isHovering, setIsHovering] = useState(false);
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex
      p={{ base: "0.5rem", md: "0.5rem 4rem" }}
      bgColor={isDark ? "blue.400" : "white"}
      align={{ base: "flex-start", md: "center" }}
      color="gray.400"
      flexDirection={{ base: "column", md: "row" }}
      pos="relative"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <Flex align="center">
        <Image src={anime?.image || manga?.image} h="4rem" mr="1rem" />
        <Text>{anime?.title || manga?.title}</Text>
      </Flex>
      <Spacer />
      <Flex gridGap={{ base: "4rem", md: "7rem" }}>
        <Text>{anime?.score || manga?.score}</Text>
        <Text>5/12</Text>
        <Text>TV</Text>
      </Flex>

      <Image
        src={anime?.image || manga?.image}
        h="12rem"
        pos="absolute"
        left="-6rem"
        display={isHovering ? "block" : "none"}
        zIndex="10"
      />
    </Flex>
  );
};
