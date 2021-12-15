import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ContentCard = ({ imgUrl, title, id, type }) => {
  return (
    <Flex direction="column" cursor="pointer" p={{ base: "1rem", md: "0" }}>
      <Link to={`/${type}/${id}`}>
        <Image
          src={imgUrl}
          h="20rem"
          mb="1rem"
          borderRadius="0.5rem"
          w="100%"
        />
        <Text color="gray.500" fontSize="0.75rem" fontWeight="bold">
          {title}
        </Text>
      </Link>
    </Flex>
  );
};
