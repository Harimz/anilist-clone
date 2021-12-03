import React from "react";
import {
  Container,
  Flex,
  Grid,
  Spinner,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { TopAnimeCard } from "./TopAnimeCard";
import { TopAnimeMobileCard } from "./TopAnimeMobileCard";
import { useTopContentQuery } from "../../app/services/contentApi";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../Error/ErrorMessage";

export const TopAnime = () => {
  const { data, isFetching, isError } = useTopContentQuery({
    type: "top",
    contentType: "anime",
  });
  const [isMobile] = useMediaQuery("(max-width: 976px)");
  const navigate = useNavigate();

  if (isFetching || !data)
    return (
      <Container centerContent>
        <Spinner color="white" />
      </Container>
    );
  const animeList = data.top.slice(0, 10);

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <Container maxW="container.xl" mt="4rem">
      <Flex justify="space-between" color="gray.400" mb="3rem">
        <Text fontWeight="bold" fontSize="1.25rem">
          TOP 100 ANIME
        </Text>
        <Text
          variant="link"
          cursor="pointer"
          onClick={() => {
            navigate("/search/anime/top-100");
          }}
        >
          View All
        </Text>
      </Flex>
      <Grid
        gridTemplateColumns={{
          base: "repeat(auto-fill, minmax(145px, 1fr))",
          lg: "repeat(1, 1fr)",
        }}
        gap="2rem"
      >
        {animeList.map((anime, index) => {
          return (
            <>
              {!isMobile && (
                <TopAnimeCard
                  key={anime.mal_id}
                  rank={anime.rank}
                  id={anime.mal_id}
                  title={anime.title}
                  img={anime.image_url}
                  rating={anime.score}
                  type={anime.type}
                  users={anime.members}
                  finished={anime.end_date}
                  episodes={anime.episodes}
                />
              )}
              {isMobile && (
                <TopAnimeMobileCard
                  key={index}
                  img={anime.image_url}
                  rank={anime.rank}
                  title={anime.title}
                  id={anime.mal_id}
                />
              )}
            </>
          );
        })}
      </Grid>
    </Container>
  );
};
