import React from "react";
import { Box, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { colorByPercent, getPercent } from "../../../helpers";
import { FiSmile } from "react-icons/fi";
import { Link } from "react-router-dom";

export const LargeCard = ({ data, type }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const episodes = data?.episodes ? "episodes" : "";
  const volumes = data?.volumes ? "volumes" : "";

  return (
    <Flex
      h={{ base: "15rem", md: "auto" }}
      bgColor={isDark ? "blue.300" : "white"}
    >
      <Link to={`/${type}/${data.mal_id}`}>
        <Box position="relative">
          <Image
            w={{ base: "9rem", md: "12rem", lg: "14rem" }}
            h={{ base: "15rem", md: "20rem", lg: "20rem" }}
            src={data?.image_url || ""}
          />

          <Box
            position="absolute"
            background="rgba(0,0,0,0.7)"
            w="100%"
            bottom="0"
            h="6rem"
            p={{ base: "0.75rem", md: "1rem" }}
          >
            <Text
              color="white"
              fontWeight="semibold"
              fontSize={{ base: "0.7rem", md: "0.85rem" }}
            >
              {data.title}
            </Text>
          </Box>
        </Box>
      </Link>

      <Box p="1rem" w="65%" overflowY={{ base: "scroll", md: "visible" }}>
        <Flex justify="space-between">
          <Text color="gray.200" fontWeight="semibold">
            {data?.episodes || data?.volumes || "Unavailable"}{" "}
            {episodes || volumes}
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

        <Text color="gray.400" mt="0.5rem">
          {data.type}
        </Text>

        <Text
          color="gray.400"
          mt="1rem"
          fontSize={{ base: "0.75rem", md: "1rem" }}
        >
          {data?.synopsis || "Synopsis unavailable"}
        </Text>
      </Box>
    </Flex>
  );
};
