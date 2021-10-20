import React from "react";
import { useGetAnimeByIdQuery } from "../../../services/anilistApi";
import { useParams, useLocation } from "react-router-dom";
import { Container, Flex } from "@chakra-ui/react";
import { AnimeInfoHeader } from "../ContentInfoHeader";
import { AnimeInfoSidebar } from "./AnimeInfoSidebar";
import { ContentInfoResources } from "../ContentInfoResources";

export const AnimeInfo = () => {
  const params = useParams();
  const location = useLocation();
  const contentType = location.pathname.split("/")[1];
  const { data, isFetching } = useGetAnimeByIdQuery(params.contentId);

  if (isFetching) return "Loading...";

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
      <AnimeInfoHeader img={image_url} title={title} synopsis={synopsis} />
      <Container maxW="container.xl" mt="2rem">
        <Flex>
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
