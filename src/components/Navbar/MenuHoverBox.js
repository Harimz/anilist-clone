import React from "react";
import { Link } from "react-router-dom";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import {
  FaPlay,
  FaBookOpen,
  FaUserAstronaut,
  FaStar,
  FaRegThumbsUp,
} from "react-icons/fa";
import { BsJoystick } from "react-icons/bs";

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
          <Link to="/">
            <Text variant="link" fontWeight="bold" mb="0.5rem">
              Manga
            </Text>
          </Link>
          <SimpleGrid gridAutoFlow="column" spacing={2}>
            <Link to="/search/manga/top-100">
              <Text variant="subLink">Top 100</Text>
            </Link>
            <Link to="/search/manga/trending">
              <Text variant="subLink">Trending</Text>
            </Link>
            <Link to="/search/manga/top-manhwa">
              <Text variant="subLink">Top Manhwa</Text>
            </Link>
          </SimpleGrid>
        </Flex>
      </Flex>
      <SimpleGrid columns={2} spacing={3} p="0 1rem 1rem 1rem">
        <Link to="/">
          <Flex>
            <BsJoystick size={16} style={{ color: "#A0B1C5" }} />
            <Text variant="subLink" ml="1rem">
              Staff
            </Text>
          </Flex>
        </Link>
        <Link to="/">
          <Flex>
            <FaUserAstronaut size={16} style={{ color: "#A0B1C5" }} />
            <Text variant="subLink" ml="1rem">
              Characters
            </Text>
          </Flex>
        </Link>
        <Link to="/">
          <Flex>
            <FaStar size={16} style={{ color: "#A0B1C5" }} />
            <Text variant="subLink" ml="1rem">
              Reviews
            </Text>
          </Flex>
        </Link>
        <Link to="/">
          <Flex>
            <FaRegThumbsUp size={16} style={{ color: "#A0B1C5" }} />
            <Text variant="subLink" ml="1rem">
              Recommendations
            </Text>
          </Flex>
        </Link>
      </SimpleGrid>
    </Flex>
  );
};

export default MenuHoverBox;
