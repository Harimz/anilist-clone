import React, { useState } from "react";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import { BsFillChatFill } from "react-icons/bs";

export const ListCard = ({ anime, manga }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [showNote, setShowNote] = useState(false);
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
      {(anime?.note || manga?.note) && (
        <Box pos="relative">
          <BsFillChatFill
            size={18}
            color="#A0B1C5"
            style={{ marginLeft: "1rem" }}
            onMouseOver={() => setShowNote(true)}
            onMouseOut={() => setShowNote(false)}
          />
          <Box
            pos="absolute"
            bgColor="rgba(0,0,0,0.7)"
            p="0.5rem"
            left="3rem"
            top="0"
            w="20rem"
            display={showNote ? "block" : "none"}
          >
            <Text>{anime?.note || manga?.note}</Text>
          </Box>
        </Box>
      )}
      <Spacer />
      <Flex gridGap={{ base: "4rem", md: "7rem" }}>
        <Text>{anime?.score || manga?.score}</Text>
        <Text>
          {anime?.episodeProgress.toString() || manga?.volumesRead.toString()}/
          {anime?.episodeCount.toString() || manga?.volumeCount.toString()}
        </Text>
        <Text>{anime?.animeType || manga?.managType}</Text>
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
