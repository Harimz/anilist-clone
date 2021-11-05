import React from "react";
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";
import { TopAnime } from "../TopAnime/TopAnime";
import { useGetSearchResultsQuery } from "../../services/anilistApi";
import { BrowseContent } from "../BrowseContent/BrowseContent";
import { useSelector } from "react-redux";
import { Container, Heading, Spinner } from "@chakra-ui/react";
import { BrowseTopContent } from "../Browse/BrowseTopContent";

export const SearchContent = () => {
  const { content } = useParams();
  const { searchValue, genres, format, publishingStatus, sort } = useSelector(
    (state) => state.filter
  );

  const { data, isFetching, error } = useGetSearchResultsQuery({
    content,
    search: searchValue,
    genre: genres.toString(),
    type: format,
    status: publishingStatus,
    sort: sort,
  });

  if (genres.length === 0 && searchValue.length === 0)
    return (
      <>
        <BrowseTopContent type="anime" title="UPCOMING ANIME" />
        <BrowseTopContent type="manga" title="TOP MANGA" />
        <TopAnime />
      </>
    );

  if (isFetching)
    return (
      <Container maxW="container.xl" centerContent minHeight="50vh">
        <Spinner color="white" />
      </Container>
    );

  if (error)
    return (
      <Container
        maxW="container.xl"
        centerContent
        color="white"
        minHeight="80vh"
      >
        <Heading>Something went wrong :(</Heading>
      </Container>
    );

  return (
    <>
      <BrowseContent results={data.results} type={content} />
    </>
  );
};
