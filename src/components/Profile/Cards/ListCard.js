import React, { useState } from "react";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Grid, Spacer, Text } from "@chakra-ui/layout";
import { BsFillChatFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useIsDark } from "../../../hooks";

export const ListCard = ({ anime, manga }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [showNote, setShowNote] = useState(false);

  const { isDark } = useIsDark();

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
        <Link
          to={anime ? `/anime/${anime.animeID}` : `/manga/${manga.mangaID}`}
        >
          <Text variant="link">{anime?.title || manga?.title}</Text>
        </Link>
      </Flex>
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
            w="25rem"
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
          {anime?.episodeProgress || manga?.volumesRead || "0"}/
          {anime?.episodeCount || manga?.volumeCount || "0"}
        </Text>

        <Text display={{ base: "none", md: "block" }}>
          {anime?.animeType || manga?.mangaType}
        </Text>
      </Grid>

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
