import React, { useEffect, useState } from "react";
import { Container, Grid, Spinner } from "@chakra-ui/react";
import { useSearchParams, useParams, useLocation } from "react-router-dom";
import { useSearchQuery } from "../../app/services/contentApi";
import { ContentCard } from "./ContentCard";

export const BrowseSearch = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams({});
  const [filters, setFilters] = useState({});
  const { data, isFetching } = useSearchQuery({
    q: filters.q,
    genres: filters.genres,
    content: filters.content,
    url: `${location.pathname}${location.search}`,
  });
  const { content } = useParams();

  useEffect(() => {
    const q = searchParams.get("q") || "";
    const genres = searchParams.get("genres") || "";
    const status = searchParams.get("status") || "";
    const type = searchParams.get("type") || "";
    const sort = searchParams.get("sort") || "";

    setFilters({ q, genres, content });
  }, [searchParams, content]);

  const results = data?.top || data?.results;

  if (isFetching) {
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
