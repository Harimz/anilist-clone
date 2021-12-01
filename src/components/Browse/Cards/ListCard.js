import React from "react";

import {
  Box,
  Flex,
  Grid,
  Image,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { colorByPercent, getPercent } from "../../../helpers/index";
import { Link } from "react-router-dom";
import { FiSmile } from "react-icons/fi";

export const ListCard = ({ data, type }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const episodes = data?.episodes ? "episodes" : "";
  const volumes = data?.volumes ? "volumes" : "";

  return (
    <Flex
      bgColor={isDark ? "blue.400" : "white"}
      p={{ base: "0.5rem", md: "1rem" }}
      borderRadius="0.5rem"
      align="center"
      boxShadow={isDark ? "" : " 0 14px 30px #C9D7E3AA,0 4px 4px #C9D7E3AA"}
    >
      <Image src={data.image_url} h="4.5rem" w="3.5rem" mr="2rem" />
      <Flex flexGrow="100" flexDirection={{ base: "column", md: "row" }}>
        <Text variant="link" cursor="pointer" fontWeight="bold" mb="0.5rem">
          <Link to={`/${type}/${data.mal_id}`}>{data.title}</Link>
        </Text>
        <Spacer />
        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 100%)",
            md: "repeat(3, 8rem)",
          }}
          gap={{ base: "0.25rem", md: "4rem" }}
          alignItems="center"
        >
          <Flex alignItems="center">
            <Box>
              <FiSmile
                color={colorByPercent(+getPercent(data.score), 0, 120)}
              />
            </Box>

            <Flex
              ml="1rem"
              flexDirection={{ base: "row", md: "column" }}
              flexGrow="100"
            >
              <Text color="gray.200" fontWeight="semibold">
                {getPercent(data.score)}%
              </Text>
              <Spacer />
              <Text color="gray.400" fontSize="0.85rem">
                {data.members} users
              </Text>
            </Flex>
          </Flex>

          <Flex
            flexDirection={{ base: "row", md: "column" }}
            justify="space-between"
          >
            <Text color="gray.200" fontWeight="semibold">
              {data.type}
            </Text>
            <Text color="gray.400">
              {data.episodes || data.volumes} {episodes || volumes}
            </Text>
          </Flex>

          <Flex
            flexDirection={{ base: "row", md: "column" }}
            justify="space-between"
          >
            <Text color="gray.200" fontWeight="bold">
              Status
            </Text>
            <Text color="gray.400">
              {data?.airing || data?.publishing ? "Airing" : "Finished"}
            </Text>
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
};
