import React from "react";
import { Link } from "react-router-dom";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { FaPlay, FaBookOpen } from "react-icons/fa";

const MenuHoverBox = () => {
  return (
    <Flex direction="column">
      <Flex align="center" p="1rem 1rem 0 1rem">
        <FaPlay size={20} style={{ color: "#A0B1C5" }} />
        <Flex direction="column" ml="1rem">
          <Link to="/search/anime">
            <Text variant="link" fontWeight="bold" mb="0.5rem">
              Anime
            </Text>
          </Link>
          <SimpleGrid gridAutoFlow="column" spacing={2}>
            <Link to="/search/anime/top-100">
              <Text variant="subLink" cursor="pointer">
                Top 100
              </Text>
            </Link>
            <Link to="/search/anime/trending">
              <Text variant="subLink">Trending</Text>
            </Link>
            <Link to="/search/anime/top-movies">
              <Text variant="subLink">Top Movies</Text>
            </Link>
          </SimpleGrid>
        </Flex>
      </Flex>
      <Flex align="center" mt="1rem" p="0 1rem 1rem 1rem">
        <FaBookOpen size={20} style={{ color: "#A0B1C5" }} />
        <Flex direction="column" ml="1rem">
          <Link to="/search/manga">
            <Text variant="link" fontWeight="bold" mb="0.5rem">
              Manga
            </Text>
          </Link>
          <SimpleGrid gridAutoFlow="column" spacing={2}>
            <Link to="/search/manga/top-100">
              <Text variant="subLink">Top 100</Text>
            </Link>

            <Link to="/search/manga/top-manhwa">
              <Text variant="subLink">Top Manhwa</Text>
            </Link>
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MenuHoverBox;
