import React from "react";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { SidebarItem } from "../SidebarItem";
import moment from "moment";
import { getPercent } from "../../../helpers";

export const AnimeInfoSidebar = ({
  airing,
  format,
  epDuration,
  episodes,
  status,
  startDate,
  rank,
  popularity,
  score,
  studios,
  producers,
  genres,
  source,
  highestRated,
  favorites,
  title_english,
  title_japanese,
  season,
}) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const names = producers.map((item) => item.name);
  const genreList = genres.map((item) => item.name).join();

  return (
    <Flex direction="column">
      <Flex
        bgColor={isDark ? "blue.400" : "white"}
        align="center"
        p="0.5rem"
        mb="1rem"
      >
        <FaStar size={20} style={{ color: "yellow" }} />
        <Text ml="1rem" color="gray.400" fontSize="0.85rem">
          #{rank ? rank : "NA"} Highest Rated All Time
        </Text>
      </Flex>
      <Flex bgColor={isDark ? "blue.400" : "white"} align="center" p="0.5rem">
        <FaStar size={20} style={{ color: "yellow" }} />
        <Text ml="1rem" color="gray.400" fontSize="0.85rem">
          #{highestRated ? highestRated : "NA"} Highest Rated 2021
        </Text>
      </Flex>
      <Flex
        bgColor={isDark ? "blue.400" : "white"}
        mt="1rem"
        p="1rem"
        direction="column"
      >
        <SidebarItem type="Airing" item={airing} />
        <SidebarItem type="Format" item={format} />
        <SidebarItem type="Episodes" item={episodes} />
        <SidebarItem type="Episode Duration" item={epDuration} />
        <SidebarItem type="Status" item={status} />
        <SidebarItem
          type="Start Date"
          item={moment(startDate.from).format("MMMM Do YYYY")}
        />
        <SidebarItem type="Season" item={season} />

        <SidebarItem
          type="Average Score"
          item={score ? `${getPercent(score)}%` : "NA"}
        />
        <SidebarItem type="Favorites" item={favorites} />

        <SidebarItem type="Popularity" item={popularity} />
        <SidebarItem type="Studios" item={studios[0]?.name} />
        <Flex mb="1rem">
          <Box>
            <Text color="gray.200" fontWeight="bold">
              Producers
            </Text>
            {names.map((item, index) => (
              <Text color="gray.400" fontSize="0.85rem" key={index}>
                {item}
              </Text>
            ))}
          </Box>
        </Flex>
        <SidebarItem type="Source" item={source} />
        <SidebarItem type="Genres" item={genreList} />
        <SidebarItem type="English" item={title_english} />
        <SidebarItem type="Native" item={title_japanese} />
      </Flex>
    </Flex>
  );
};
