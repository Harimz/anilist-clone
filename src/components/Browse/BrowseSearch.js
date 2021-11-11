import React from "react";
import { Container, Grid, Spinner } from "@chakra-ui/react";
import { useSearchParams, useParams, useLocation } from "react-router-dom";
import { useSearchQuery } from "../../app/services/contentApi";
import { ContentCard } from "./ContentCard";

export const BrowseSearch = () => {
  const location = useLocation();
  const { content } = useParams();
  const [searchParams] = useSearchParams({});
  const { data, isFetching } = useSearchQuery({
    q: searchParams.get("q") || "",
    genres: searchParams.get("genres") || "",
    type: searchParams.get("type") || "",
    status: searchParams.get("status") || "",
    sort: searchParams.get("sort") || "",
    content: content,
    url: `${location.pathname}${location.search}`,
  });

  const results = data?.top || data?.results;

  if (isFetching || !results) {
    return (
      <Container maxW="container.xl" mt="3rem" centerContent>
        <Spinner color="white" />
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" mt="3rem">
      <Grid templateColumns="repeat(auto-fill, minmax(196px, 1fr))" gap={6}>
        {results.map((result) => (
          <ContentCard
            imgUrl={result.image_url}
            title={result.title}
            id={result.mal_id}
            type={content}
            key={result.mal_id}
          />
        ))}
      </Grid>
    </Container>
  );
};
