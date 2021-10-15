import { Container, Grid, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { useGetTopAnimeQuery } from "../../services/anilistApi";
import { AnimeCard } from "./AnimeCard";
import { Filter } from "./Filter";

export const Browse = () => {
  const { data, isFetching } = useGetTopAnimeQuery();

  if (isFetching) return "Loading...";

  return (
    <>
      <Filter />
      <Container maxW="container.xl" mt="3rem">
        <Text color="gray.500" fontSize="1.25rem" fontWeight="bold" mb="2rem">
          UPCOMING NEXT SEASON
        </Text>

        <Grid templateColumns="repeat(auto-fill, minmax(196px, 1fr))" gap={6}>
          {data.top.slice(0, 10).map((anime) => (
            <AnimeCard
              imgUrl={anime.image_url}
              title={anime.title}
              id={anime.mal_id}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};
