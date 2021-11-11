import React from "react";
import { Container, Grid, Text } from "@chakra-ui/layout";
import { ContentCard } from "./ContentCard";
import { useTopContentQuery } from "../../app/services/contentApi";

export const BrowseTopContent = ({ type, content, title }) => {
  const { data, isFetching } = useTopContentQuery({ type, content });

  if (isFetching) return "Loading...";

  return (
    <>
      <Container maxW="container.xl" mt="3rem">
        <Text color="gray.500" fontSize="1.25rem" fontWeight="bold" mb="2rem">
          {title}
        </Text>

        <Grid templateColumns="repeat(auto-fill, minmax(196px, 1fr))" gap={6}>
          {data.top.slice(0, 10).map((content) => (
            <ContentCard
              imgUrl={content.image_url}
              title={content.title}
              id={content.mal_id}
              type={type}
              key={content.mal_id}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};
