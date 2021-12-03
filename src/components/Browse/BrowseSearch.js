import React from "react";
import { Container, Grid, Heading, Spinner } from "@chakra-ui/react";
import { useSearchParams, useParams, useLocation } from "react-router-dom";
import { useSearchQuery } from "../../app/services/contentApi";
import { ContentCard } from "./Cards/ContentCard";
import { DefaultAnimeView } from "./DefaultViews/DefaultAnimeView";
import { DefaultMangaView } from "./DefaultViews/DefaultMangaView";
import { ContentViews } from "./ContentViews";
import { DisplayContent } from "./DisplayContent";
import { ErrorMessage } from "../Error/ErrorMessage";

export const BrowseSearch = () => {
  const location = useLocation();
  const { content } = useParams();
  const [searchParams] = useSearchParams({});
  const { data, error, isFetching } = useSearchQuery({
    q: searchParams.get("q") || "",
    genres: searchParams.get("genres") || "",
    type: searchParams.get("type") || "",
    status: searchParams.get("status") || "",
    sort: searchParams.get("sort") || "",
    order_by: searchParams.get("order_by") || "",
    content: content,
    url: `${location.pathname}${location.search}`,
  });

  const results = data?.top || data?.results;

  if (
    !searchParams.get("q") &&
    !searchParams.get("genres") &&
    !searchParams.get("order_by")
  ) {
    return (
      <>
        {content === "anime" && <DefaultAnimeView />}
        {content === "manga" && <DefaultMangaView />}
      </>
    );
  }

  if (isFetching || !results) {
    return (
      <Container maxW="container.xl" mt="3rem" centerContent>
        <Spinner color="white" />
      </Container>
    );
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <Container maxW="container.xl">
      <ContentViews />
      <DisplayContent data={results} />
    </Container>
  );
};
