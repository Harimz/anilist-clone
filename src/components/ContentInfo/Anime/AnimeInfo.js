import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { Container, Flex } from "@chakra-ui/react";
import { ContentInfoHeader } from "../ContentInfoHeader";
import { AnimeInfoSidebar } from "./AnimeInfoSidebar";
import { ContentInfoResources } from "../ContentInfoResources";
import { useContentInfoQuery } from "../../../app/services/contentApi";

export const AnimeInfo = () => {
  const params = useParams();
  const location = useLocation();
  const contentType = location.pathname.split("/")[1];
  const { data, isFetching } = useContentInfoQuery({
    type: "anime",
    id: params.contentId,
  });

  if (isFetching || !data) return "Loading...";

  const {
    image_url,
    title,
    synopsis,
    rank,
    popularity,
    airing,
    type,
    episodes,
    duration,
    aired,
    score,
    members,
    studios,
    producers,
    source,
    genres,
    status,
    title_english,
    title_japanese,
    premiered,
    related,
    trailer_url,
  } = data;

  return (
    <Flex direction="column">
      <ContentInfoHeader
        img={image_url}
        title={title}
        synopsis={synopsis}
        image={image_url}
        id={params.contentId}
        type="anime"
        episodes={episodes}
      />
      <Container maxW="container.xl" mt="2rem">
        <Flex direction={{ base: "column", lg: "row" }}>
          <AnimeInfoSidebar
            airing={airing ? airing : status}
            format={type}
            episodes={episodes}
            epDuration={duration}
            status={status}
            startDate={aired}
            rank={rank}
            popularity={members}
            score={score}
            studios={studios}
            producers={producers}
            genres={genres}
            source={source}
            highestRated={popularity}
            title_english={title_english}
            title_japanese={title_japanese}
            season={premiered}
          />
          <ContentInfoResources
            related={related}
            trailer={trailer_url}
            type={contentType}
          />
        </Flex>
      </Container>
    </Flex>
  );
};
