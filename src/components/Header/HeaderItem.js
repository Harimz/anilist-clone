import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export const HeaderItem = ({ img, text, title }) => {
  return (
    <Flex>
      <Image src={img} h="6rem" w="5rem" mr={{ base: "1rem", lg: "3rem" }} />
      <Box>
        <Heading size="sm" color="white" mb="1rem">
          {title}
        </Heading>
        <Text color="blue.100">{text}</Text>
      </Box>
    </Flex>
  );
};
