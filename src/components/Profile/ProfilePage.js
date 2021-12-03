import React from "react";
import { Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Header } from "./Header";

export const ProfilePage = () => {
  const { user } = useAuth();
  const { username } = useParams();

  console.log(username);

  return (
    <>
      <Header user={user} />
      <Flex bgColor="blue.400">
        <Container maxW="container.xl">
          <Flex
            gridGap={{ base: "1rem", md: "5rem" }}
            p="0.75rem"
            align="center"
            textAlign="center"
          >
            <Text
              variant="link"
              fontWeight="semibold"
              fontSize={{ base: "0.75rem", md: "1rem" }}
            >
              Overview
            </Text>
            <Text
              variant="link"
              fontWeight="semibold"
              fontSize={{ base: "0.75rem", md: "1rem" }}
            >
              Anime List
            </Text>
            <Text
              variant="link"
              fontWeight="semibold"
              fontSize={{ base: "0.75rem", md: "1rem" }}
            >
              Manga List
            </Text>
            <Text
              variant="link"
              fontWeight="semibold"
              fontSize={{ base: "0.75rem", md: "1rem" }}
            >
              Favorites
            </Text>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};
