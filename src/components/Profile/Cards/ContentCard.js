import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";

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
        <Text color="white" fontSize="0.85rem">
          {anime?.title || manga?.title}
        </Text>
        <Text color="gray.500">
          {anime?.episodeProgress.toString() || manga?.volumesRead.toString()}/
          {anime?.episodeCount.toString() || manga?.volumeCount.toString()}
        </Text>
      </Flex>
    </Box>
  );
};
