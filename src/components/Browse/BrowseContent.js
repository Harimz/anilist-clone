import React from "react";
import {
  Container,
  Grid,
  Heading,
  Spinner,
  useColorMode,
} from "@chakra-ui/react";
import { ContentCard } from "./ContentCard";
import { useParams } from "react-router-dom";
import { useSearchTopQuery } from "../../app/services/contentApi";

export const BrowseContent = ({ amount = 5, type, title, searchType }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const params = useParams();

  const { data, isFetching } = useSearchTopQuery({
    content: params.content || type,
    searchType: params.searchType || searchType,
  });

  if (isFetching || !data) {
    return (
      <Container centerContent>
        <Spinner color={isDark ? "white" : "black"} />
      </Container>
    );
  }

  return (
    <Container maxW="container.xl">
      <Heading
        mb="2rem"
        color={isDark ? "gray.150" : "gray.450"}
        fontSize="1.25rem"
      >
        {title}
      </Heading>

      <Grid
        templateColumns="repeat(auto-fill, minmax(196px, 1fr))"
        gap={6}
        mb="3rem"
      >
        {data.top.slice(0, amount).map((item) => (
          <ContentCard
            imgUrl={item.image_url}
            title={item.title}
            id={item.mal_id}
            type={type}
          />
        ))}
      </Grid>
    </Container>
  );
};
