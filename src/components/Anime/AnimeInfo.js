import React from "react";
import { useGetAnimeByIdQuery } from "../../services/anilistApi";
import { useParams } from "react-router-dom";
import { Container, Flex } from "@chakra-ui/react";
import { AnimeInfoHeader } from "./AnimInfoHeader";
import { AnimeInfoSidebar } from "./AnimeInfoSidebar";
import { AnimeInfoResources } from "./AnimeInfoResources";
import moment from "moment";

export const AnimeInfo = () => {
  const params = useParams();
  const { data, isFetching } = useGetAnimeByIdQuery(params.animeId);

  if (isFetching) return "Loading...";

  console.log(data);

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
    broadcast,
    genres,
    status,
  } = data;

  return (
    <Flex direction="column">
      <AnimeInfoHeader img={image_url} title={title} synopsis={synopsis} />
      <Container maxW="container.xl">
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
          />
          <AnimeInfoResources />
        </Flex>
      </Container>
    </Flex>
  );
};
