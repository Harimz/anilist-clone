import React from "react";
import { Container, Grid } from "@chakra-ui/react";
import { ContentCard } from "../Browse/ContentCard";

export const BrowseContent = ({ results, type }) => {
  return (
    <Container maxW="container.xl" mt="3rem">
      <Grid templateColumns="repeat(auto-fill, minmax(196px, 1fr))" gap={6}>
        {results.map((result) => (
          <ContentCard
            imgUrl={result.image_url}
            title={result.title}
            id={result.mal_id}
            type={type}
            key={result.mal_id}
          />
        ))}
      </Grid>
    </Container>
  );
};
