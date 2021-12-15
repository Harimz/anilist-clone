import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { useIsDark } from "../../../hooks";

export const StatusPreview = ({ pic, username, status }) => {
  const { isDark } = useIsDark();

  return (
    <Box>
      <Text color="gray.400" m="1rem 0">
        Preview
      </Text>
      <Box bgColor={isDark ? "blue.400" : "white"} p="1rem">
        <Flex align="center">
          <Image src={pic} h="3rem" mr="1rem" />
          <Text color="gray.400" fontSize="0.85rem">
            {username}
          </Text>
        </Flex>
        <Text color="gray.400" m="1rem 0 2rem 0">
          {status}
        </Text>
      </Box>
    </Box>
  );
};
