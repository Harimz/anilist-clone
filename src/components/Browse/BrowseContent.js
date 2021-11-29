import React from "react";
import {
  Container,
  Flex,
  Heading,
  Spinner,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { useSearchTopQuery } from "../../app/services/contentApi";

import { ContentViews } from "./ContentViews";
import { DisplayContent } from "./DisplayContent";

export const BrowseContent = ({ amount = 5, type, title, searchType }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const params = useParams();
  const contentType = type || params.content;

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
      <Flex justifyContent="space-between" mb="2rem">
        <Heading color={isDark ? "gray.150" : "gray.450"} fontSize="1.25rem">
          {title}
        </Heading>
        {amount === 5 ? (
          <Link to={`/search/${type}/${searchType}`}>
            <Text variant="link">View All</Text>
          </Link>
        ) : (
          <ContentViews />
        )}
      </Flex>

      <DisplayContent
        data={data.top.slice(0, amount)}
        type={contentType}
        amount={amount}
      />
      {/* <Grid
        templateColumns="repeat(auto-fill, minmax(196px, 1fr))"
        gap={6}
        mb="3rem"
      >
        {data.top.slice(0, amount).map((item) => (
          <ContentCard
            key={item.mal_id}
            imgUrl={item.image_url}
            title={item.title}
            id={item.mal_id}
            type={contentType}
          />
        ))}
      </Grid> */}
    </Container>
  );
};
