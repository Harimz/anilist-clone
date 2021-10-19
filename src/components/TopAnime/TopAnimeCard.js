import React from "react";

import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { getPercent } from "../../helpers/";
import { Link } from "react-router-dom";
import { FiSmile } from "react-icons/fi";

export const TopAnimeCard = ({
  id,
  title,
  img,
  rank,
  finished,
  type,
  users,
  rating,
  episodes,
}) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex mb="2rem">
      <Flex w="5%" justify="center" align="center" mr="2rem">
        <Heading color="gray.500" fontSize="2rem">
          #{rank}
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
          <Image src={img} h="4.5rem" w="3.5rem" mr="2rem" />
          <Text variant="link" cursor="pointer" fontWeight="bold">
            <Link to={`/anime/${id}`}>{title}</Link>
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
              {getPercent(rating)}%
            </Text>
            <Text variant="subLink">{users} users</Text>
          </Box>
          <Box>
            <Text variant="link" fontWeight="bold">
              {type}
            </Text>
            <Text variant="subLink">{episodes} episode(s)</Text>
          </Box>
          <Box>
            <Text variant="link" fontWeight="bold">
              {finished ? finished : "airing"}
            </Text>
            <Text variant="subLink">{finished ? "finished" : "airing"}</Text>
          </Box>
        </Grid>
      </Flex>
    </Flex>
  );
};
