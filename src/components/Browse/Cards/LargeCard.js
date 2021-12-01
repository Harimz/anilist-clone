import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { colorByPercent, getPercent } from "../../../helpers";
import { FiSmile } from "react-icons/fi";

export const LargeCard = ({ data }) => {
  return (
    <Flex border="2px solid red">
      <Box position="relative">
        <Image
          w={{ base: "9rem", md: "12rem", lg: "14rem" }}
          h={{ base: "12rem", md: "15rem", lg: "20rem" }}
          src={data?.image_url || ""}
        />

        <Box
          position="absolute"
          background="rgba(0,0,0,0.7)"
          w="100%"
          bottom="0"
          h="6rem"
          p="1rem"
        >
          <Text color="white" fontWeight="semibold" fontSize="0.85rem">
            {data.title}
          </Text>
        </Box>
      </Box>

      <Box p="1rem" border="2px solid red" w="65%">
        <Flex justify="space-between">
          <Text color="gray.200" fontWeight="semibold">
            {data?.episodes || data?.volumes || ""}{" "}
            {data?.episodes ? "episodes" : "volumes"}
          </Text>
          <Flex align="center">
            <FiSmile
              size={24}
              color={colorByPercent(+getPercent(data.score), 0, 120)}
            />
            <Text color="gray.400" ml="1rem">
              {getPercent(data.score)}%
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
