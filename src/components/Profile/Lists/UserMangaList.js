import React from "react";
import { useGetMangaQuery } from "../../../app/services/userApi";
import { Container, Grid, Text } from "@chakra-ui/layout";
import { useSelector } from "react-redux";
import { ListCard } from "../Cards/ListCard";
import { ListHeader } from "./ListHeader";
import { SmallListCard } from "../Cards/SmallListCard";
import { ContentCard } from "../Cards/ContentCard";
import { Loading } from "../../Loading/Loading";

export const UserMangaList = () => {
  const { data, isFetching } = useGetMangaQuery();
  const { userView } = useSelector((state) => state.views);

  if (isFetching || !data) {
    return <Loading />;
  }

  if (userView === "list") {
    return (
      <Container maxW="container.xl" mb="30rem">
        <ListHeader />
        <Grid gridTemplateColumns="repeat(1,1fr)">
          {data.map((manga) => (
            <ListCard key={manga.mangaID} manga={manga} />
          ))}
        </Grid>
      </Container>
    );
  }

  if (userView === "no-pic-list") {
    return (
      <Container maxW="container.xl" mb="30rem">
        <ListHeader />
        <Grid gridTemplateColumns="repeat(1,1fr)">
          {data.map((manga) => (
            <SmallListCard key={manga.mangaID} manga={manga} />
          ))}
        </Grid>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl">
      <Text color="gray.400" fontSize="1.5rem" mb="1rem ">
        Watching
      </Text>
      <Grid
        gridTemplateColumns="repeat(auto-fill, minmax(156px, 1fr))"
        gap="1rem"
      >
        {data.map((manga) => (
          <ContentCard manga={manga} />
        ))}
      </Grid>
    </Container>
  );
};
