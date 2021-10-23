import React from "react";
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";
import { BrowseAnime } from "../Browse/BrowseAnime";
import { BrowseManga } from "../Browse/BrowseManga";
import { TopAnime } from "../TopAnime/TopAnime";
import { useGetSearchResultsQuery } from "../../services/anilistApi";
import { BrowseContent } from "../BrowseContent/BrowseContent";
import { useSelector } from "react-redux";
import { Container, Heading, Spinner } from "@chakra-ui/react";

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

  console.log(searchValue.length === 0 && genres.length === 0);

  if (genres.length === 0 && searchValue.length === 0)
    return (
      <>
        <BrowseAnime amount={10} title="Upcoming Anime" />
        <BrowseManga amount={10} title="Top Manga" />
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
