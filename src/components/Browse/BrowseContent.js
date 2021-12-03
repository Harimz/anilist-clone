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
import { ErrorMessage } from "../Error/ErrorMessage";

export const BrowseContent = ({ amount = 5, type, title, searchType }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const params = useParams();
  const contentType = type || params.content;

  const { data, isFetching, isError } = useSearchTopQuery({
    content: params.content || type,
    searchType: params.searchType || searchType,
  });

  console.log(data);

  if (isFetching || !data) {
    return (
      <Container centerContent>
        <Spinner color={isDark ? "white" : "black"} />
      </Container>
    );
  }

  if (isError) {
    return <ErrorMessage />;
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

      <DisplayContent data={data.results.slice(0, amount)} type={contentType} />
    </Container>
  );
};
