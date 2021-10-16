import { Container, Grid, Text } from "@chakra-ui/layout";
import React from "react";
import { useGetUpcomingAnimeQuery } from "../../services/anilistApi";
import { ContentCard } from "./ContentCard";

export const BrowseAnime = ({ type = "", title, amount = 100 }) => {
  const { data, isFetching } = useGetUpcomingAnimeQuery();

  if (isFetching) return "Loading...";

  return (
    <>
      <Container maxW="container.xl" mt="3rem">
        <Text color="gray.500" fontSize="1.25rem" fontWeight="bold" mb="2rem">
          {title}
        </Text>

        <Grid templateColumns="repeat(auto-fill, minmax(196px, 1fr))" gap={6}>
          {data.top.slice(0, amount).map((anime) => (
            <ContentCard
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
