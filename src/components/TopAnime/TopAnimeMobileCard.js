import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export const TopAnimeMobileCard = ({ img, title, rank, id }) => {
  return (
    <Flex direction="column" position="relative">
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
          #{rank}
        </Text>
      </Flex>
      <Image src={img} alt={title} height="15rem" />
      <Text color="gray.400">{title}</Text>
    </Flex>
  );
};
