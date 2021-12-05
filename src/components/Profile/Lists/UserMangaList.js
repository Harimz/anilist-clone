import React from "react";
import { useGetMangaQuery } from "../../../app/services/userApi";
import { Container, Grid } from "@chakra-ui/layout";
import { useSelector } from "react-redux";
import { Spinner } from "@chakra-ui/spinner";
import { ListCard } from "../Cards/ListCard";
import { ListHeader } from "./ListHeader";

export const UserMangaList = () => {
  const { data, isFetching } = useGetMangaQuery();
  const { userView } = useSelector((state) => state.views);

  if (isFetching || !data) {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }

  console.log(data);

  if (userView === "list") {
    return (
      <Container maxW="container.xl" mb="30rem">
        <ListHeader />
        <Grid gridTemplateColumns="repeat(1,1fr)">
          {data.map((manga) => (
            <ListCard manga={manga} />
          ))}
        </Grid>
      </Container>
    );
  }

  return <Container maxW="container.xl"></Container>;
};
