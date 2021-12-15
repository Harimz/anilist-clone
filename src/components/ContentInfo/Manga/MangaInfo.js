import React from "react";
import { useParams } from "react-router-dom";
import { Container, Flex } from "@chakra-ui/react";
import { ContentInfoHeader } from "../ContentInfoHeader";
import { MangaInfoSidebar } from "./MangaInfoSidebar";
import { ContentInfoResources } from "../ContentInfoResources";
import { useContentInfoQuery } from "../../../app/services/contentApi";
import { Loading } from "../../Loading/Loading";

export const MangaInfo = () => {
  const params = useParams();
  const { data, isFetching } = useContentInfoQuery({
    type: "manga",
    id: params.contentId,
  });

  if (isFetching) return <Loading />;

  const {
    image_url,
    title,
    synopsis,
    rank,
    popularity,
    type,
    volumes,
    chapters,
    published,
    score,
    members,
    genres,
    status,
    title_english,
    title_japanese,
    related,
    trailer_url,
    serializations,
  } = data;

  const relations = related;

  return (
    <Flex direction="column">
      <ContentInfoHeader
        img={image_url}
        title={title}
        synopsis={synopsis}
        type="manga"
        id={params.contentId}
        volumes={volumes}
        mangaType={type}
      />
      <Container maxW="container.xl" mt="2rem">
        <Flex direction={{ base: "column", lg: "row" }}>
          <MangaInfoSidebar
            format={type}
            chapters={chapters}
            status={status}
            startDate={published}
            rank={rank}
            popularity={members}
            score={score}
            genres={genres}
            highestRated={popularity}
            title_english={title_english}
            title_japanese={title_japanese}
            volumes={volumes}
            serializations={serializations}
          />
          <ContentInfoResources related={relations} />
        </Flex>
      </Container>
    </Flex>
  );
};
