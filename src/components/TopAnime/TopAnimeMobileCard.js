import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const TopAnimeMobileCard = ({ anime }) => {
  return (
    <Flex
      direction="column"
      position="relative"
      display={{ base: "block", md: "block", lg: "none" }}
    >
      <Flex
        bgColor="blue.200"
        borderRadius="50%"
        h="3rem"
        w="3rem"
        justify="center"
        align="center"
        position="absolute"
        left="-0.5rem"
        top="-1rem"
      >
        <Text color="white" fontWeight="bold">
          #{anime.rank}
        </Text>
      </Flex>
      <Link to={`/anime/${anime.mal_id}`}>
        <Image
          src={anime.image_url}
          alt={anime.title}
          height="15rem"
          w="100%"
        />
      </Link>
      <Text color="gray.400">{anime.title}</Text>
    </Flex>
  );
};
