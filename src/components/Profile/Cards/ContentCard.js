import React from "react";
import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";

export const ContentCard = ({ anime, manga }) => {
  console.log("We in here");
  console.log('This is a test');

  return (
    <Box h="15rem">
      <Image h="100%" w="100%" src={anime?.image || manga?.image} />
    </Box>
  );
};
