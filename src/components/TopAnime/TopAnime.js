import React from "react";
import { Container, Flex, Grid, Text, useMediaQuery } from "@chakra-ui/react";
import { useGetTopAnimeQuery } from "../../services/anilistApi";
import { TopAnimeCard } from "./TopAnimeCard";
import { TopAnimeMobileCard } from "./TopAnimeMobileCard";

export const TopAnime = () => {
  const { data, isFetching } = useGetTopAnimeQuery("anime");
  const [isMobile] = useMediaQuery("(max-width: 976px)");

  if (isFetching) return "Loading...";
  const animeList = data.top.slice(0, 10);

  return (
    <Container maxW="container.xl" mt="4rem">
      <Flex justify="space-between" color="gray.400" mb="3rem">
        <Text fontWeight="bold" fontSize="1.25rem">
          TOP 100 ANIME
        </Text>
        <Text variant="link">View All</Text>
      </Flex>
      <Grid
        gridTemplateColumns={{
          base: "repeat(auto-fill, minmax(145px, 1fr))",
          lg: "repeat(1, 1fr)",
        }}
        gap="2rem"
      >
        {animeList.map((anime) => {
          return (
            <>
              {!isMobile && (
                <TopAnimeCard
                  key={anime.mal_id}
                  rank={anime.rank}
                  id={anime.mal_id}
                  title={anime.title}
                  img={anime.image_url}
                  rating={anime.score}
                  type={anime.type}
                  users={anime.members}
                  finished={anime.end_date}
                  episodes={anime.episodes}
                />
              )}
              {isMobile && (
                <TopAnimeMobileCard
                  key={anime.mal_id}
                  img={anime.image_url}
                  rank={anime.rank}
                  title={anime.title}
                  id={anime.mal_id}
                />
              )}
            </>
          );
        })}
      </Grid>
    </Container>
  );
};
