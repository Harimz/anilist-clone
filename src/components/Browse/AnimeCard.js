import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export const AnimeCard = ({ imgUrl, title, id }) => {
  return (
    <Flex direction="column" cursor="pointer">
      <Image src={imgUrl} h="20rem" mb="1rem" />
      <Text color="gray.500" fontSize="0.75rem" fontWeight="bold">
        {title}
      </Text>
    </Flex>
  );
};
