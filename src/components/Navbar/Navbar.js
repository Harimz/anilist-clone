import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/icon.svg";

export const Navbar = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box as="nav" bg={isDark ? "blue.300" : "darkPurple"}>
      <Container
        maxW="container.xl"
        display="flex"
        alignItems="center"
        p="0.5rem"
      >
        <Link to="/">
          <Image h="4rem" src={logo} alt="logo" />
        </Link>
        <Spacer />
        <Flex>
          <SimpleGrid
            gridGap="3rem"
            gridAutoFlow="column"
            placeItems="center"
            mr="8rem"
          >
            <Text variant="link">
              <Link to="/browse">Browse</Link>
            </Text>
            <Text variant="link">
              <Link to="/social">Social</Link>
            </Text>
            <Text variant="link">
              <Link to="/forum">Forum</Link>
            </Text>
          </SimpleGrid>
          <Flex align="center">
            <Text variant="link">
              <Link to="/login">Login</Link>
            </Text>
            <Button variant="primary" ml="2rem">
              Sign Up
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
