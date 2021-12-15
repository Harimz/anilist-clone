import React from "react";
import { Container, Flex, Grid, Text } from "@chakra-ui/react";
import { useTopContentQuery } from "../../app/services/contentApi";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../Error/ErrorMessage";
import { Loading } from "../Loading/Loading";
import { LargeCard } from "./LargeCard";

export const TopAnime = () => {
  const { data, isFetching, isError } = useTopContentQuery({
    type: "top",
    contentType: "anime",
  });
  const navigate = useNavigate();

  if (isFetching || !data) return <Loading />;
  const animeList = data.top.slice(0, 10);

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <Container maxW="container.xl" mt="4rem">
      <Flex justify="space-between" color="gray.400" mb="3rem">
        <Text fontWeight="bold" fontSize="1.25rem">
          TOP 100 ANIME
        </Text>
        <Text
          variant="link"
          cursor="pointer"
          onClick={() => {
            navigate("/search/anime/top-100");
          }}
        >
          View All
        </Text>
      </Flex>
      <Grid
        gridTemplateColumns={{
          base: "repeat(auto-fill, minmax(145px, 1fr))",
          lg: "repeat(1, 1fr)",
        }}
        gap="2rem"
      >
        {animeList.map((anime) => {
          return <LargeCard key={anime.mal_id} anime={anime} />;
        })}
      </Grid>
    </Container>
  );
};
