import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { numToString } from "../../../helpers";

export const ContentCard = ({ anime, manga }) => {
  return (
    <Box h="15rem" pos="relative">
      <Image h="100%" w="100%" src={anime?.image || manga?.image} />

      <Flex
        pos="absolute"
        bgColor="rgba(0,0,0,0.8)"
        bottom="0"
        w="100%"
        p="0.5rem"
        minH="5rem"
        flexDirection="column"
        justify="space-between"
      >
        <Link
          to={anime ? `/anime/${anime.animeID}` : `/manga/${manga.mangaID}`}
        >
          <Text variant="link" fontSize="0.85rem">
            {anime?.title || manga?.title}
          </Text>
        </Link>
        <Text color="gray.500">
          {numToString(anime?.episodeProgress) ||
            numToString(manga?.volumesRead)}
          /{numToString(anime?.episodeCount) || numToString(manga?.volumeCount)}
        </Text>
      </Flex>
    </Box>
  );
};
