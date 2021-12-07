import React, { useState } from "react";
import { Box, Flex, Grid, Spacer, Text } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import { BsFillChatFill } from "react-icons/bs";

export const SmallListCard = ({ anime, manga }) => {
  const { colorMode } = useColorMode();
  const [showNote, setShowNote] = useState(false);
  const isDark = colorMode === "dark";
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Flex
      bgColor={isDark ? "blue.400" : "white"}
      color="gray.400"
      p={{ base: "0.5rem", md: "0.5rem 4rem" }}
      flexDirection={{ base: "column", md: "row" }}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <Text>{anime?.title || manga?.title}</Text>
      {(anime?.note || manga?.note) && (
        <Box pos="relative" display={{ base: "none", md: "block" }}>
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
      <Grid
        gridTemplateColumns="repeat(3, 3rem)"
        gridGap={{ base: "3rem", md: "6.5rem" }}
        placeItems="center"
      >
        <Text display={{ base: "none", md: "block" }}>
          {anime?.score || manga?.score}
        </Text>

        <Text display={{ base: "block", md: "none" }} ml="1rem">
          Progress
        </Text>

        <Text>
          {anime?.episodeProgress.toString() || manga?.volumesRead.toString()}/
          {anime?.episodeCount.toString() || manga?.volumeCount.toString()}
        </Text>

        <Text display={{ base: "none", md: "block" }}>
          {anime?.animeType || manga?.mangaType}
        </Text>
      </Grid>
    </Flex>
  );
};
