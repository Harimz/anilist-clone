import { Container, Grid, Text } from "@chakra-ui/layout";
import React from "react";
import { useGetTopMangaQuery } from "../../services/anilistApi";
import { ContentCard } from "./ContentCard";

export const BrowseManga = ({ type = "", title, amount = 100 }) => {
  const { data, isFetching } = useGetTopMangaQuery(type);

  if (isFetching) return "Loading...";

  return (
    <>
      <Container maxW="container.xl" mt="3rem">
        <Text color="gray.500" fontSize="1.25rem" fontWeight="bold" mb="2rem">
          {title}
        </Text>

        <Grid templateColumns="repeat(auto-fill, minmax(196px, 1fr))" gap={6}>
          {data.top.slice(0, amount).map((manga) => (
            <ContentCard
              imgUrl={manga.image_url}
              title={manga.title}
              id={manga.mal_id}
              type="manga"
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};
