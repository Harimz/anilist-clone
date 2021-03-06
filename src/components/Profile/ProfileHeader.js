import React from "react";
import { Container, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Banner } from "./Banner";
import { useIsDark } from "../../hooks";

export const ProfileHeader = () => {
  const { user } = useAuth();
  const { isDark } = useIsDark();

  return (
    <>
      <Banner user={user} />
      <Flex bgColor={isDark ? "blue.400" : "white"}>
        <Container maxW="container.xl">
          <Flex
            gridGap={{ base: "1rem", md: "5rem" }}
            p="0.75rem"
            align="center"
            textAlign="center"
          >
            <Link to={`/user/${user.username}`}>
              <Text
                variant="link"
                fontWeight="semibold"
                fontSize={{ base: "0.75rem", md: "1rem" }}
              >
                Overview
              </Text>
            </Link>

            <Link to={`/user/${user.username}/animelist`}>
              <Text
                variant="link"
                fontWeight="semibold"
                fontSize={{ base: "0.75rem", md: "1rem" }}
              >
                Anime List
              </Text>
            </Link>

            <Link to={`/user/${user.username}/mangalist`}>
              <Text
                variant="link"
                fontWeight="semibold"
                fontSize={{ base: "0.75rem", md: "1rem" }}
              >
                Manga List
              </Text>
            </Link>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};
