import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { SidebarItem } from "../SidebarItem";
import moment from "moment";
import { getPercent } from "../../../helpers";
import { useIsDark } from "../../../hooks";

export const MangaInfoSidebar = ({
  format,
  status,
  startDate,
  rank,
  popularity,
  score,
  chapters,
  genres,
  highestRated,
  favorites,
  title_english,
  title_japanese,
  volumes,
  serializations,
}) => {
  const { isDark } = useIsDark();

  const producers = serializations.map((item) => item.name);
  const genreList = genres.map((item) => item.name).join();

  return (
    <Flex direction="column" width={{ base: "auto", lg: "20rem" }}>
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
        <SidebarItem type="Format" item={format} />
        <SidebarItem type="Chapters" item={chapters} />
        <SidebarItem type="Volumes" item={volumes} />
        <SidebarItem type="Status" item={status} />
        <SidebarItem
          type="Start Date"
          item={moment(startDate.from).format("MMMM Do YYYY")}
        />
        <SidebarItem
          type="Average Score"
          item={score ? `${getPercent(score)}%` : "NA"}
        />
        <SidebarItem type="Favorites" item={favorites} />

        <SidebarItem type="Popularity" item={popularity} />
        <SidebarItem type="Serialization" item={producers} />
        <SidebarItem type="Genres" item={genreList} />
        <SidebarItem type="English" item={title_english} />
        <SidebarItem type="Native" item={title_japanese} />
      </Flex>
    </Flex>
  );
};
