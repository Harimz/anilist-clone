import React from "react";

import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { getPercent } from "../../helpers/";
import { Link } from "react-router-dom";
import { FiSmile } from "react-icons/fi";
import { useIsDark } from "../../hooks";

export const TopAnimeCard = ({ anime }) => {
  const { isDark } = useIsDark();

  return (
    <Flex mb="2rem" display={{ base: "none", md: "none", lg: "flex" }}>
      <Flex w="5%" justify="center" align="center" mr="2rem">
        <Heading color="gray.500" fontSize="2rem">
          #{anime.rank}
        </Heading>
      </Flex>
      <Flex
        w="95%"
        bgColor={isDark ? "blue.400" : "white"}
        justify="space-between"
        p="1rem"
        borderRadius="0.5rem"
        boxShadow={isDark ? "" : " 0 14px 30px #C9D7E3AA,0 4px 4px #C9D7E3AA"}
      >
        <Flex align="center">
          <Image src={anime?.image_url} h="4.5rem" w="3.5rem" mr="2rem" />
          <Text variant="link" cursor="pointer" fontWeight="bold">
            <Link to={`/anime/${anime.mal_id}`}>{anime?.title}</Link>
          </Text>
        </Flex>
        <Grid
          gridTemplateColumns="repeat(4, 85px)"
          gap="5rem"
          placeItems="center"
        >
          <Box>
            <FiSmile size={24} style={{ color: "#32C023" }} />
          </Box>
          <Box>
            <Text variant="link" fontWeight="bold">
              {getPercent(anime?.score)}%
            </Text>
            <Text variant="subLink">{anime?.members} users</Text>
          </Box>
          <Box>
            <Text variant="link" fontWeight="bold">
              {anime?.type}
            </Text>
            <Text variant="subLink">{anime?.episodes} episode(s)</Text>
          </Box>
          <Box>
            <Text variant="link" fontWeight="bold">
              {anime?.end_date ? anime?.end_date : "airing"}
            </Text>
            <Text variant="subLink">
              {anime?.end_date ? "finished" : "airing"}
            </Text>
          </Box>
        </Grid>
      </Flex>
    </Flex>
  );
};
