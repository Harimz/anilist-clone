import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuList,
  SimpleGrid,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/icon.svg";
import MenuHoverBox from "./MenuHoverBox";
import { useScrollDirection } from "../../hooks";

export const Navbar = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const { scrollDirection } = useScrollDirection();

  const scrollingUp = scrollDirection === "UP";

  return (
    <Box
      position="sticky"
      left="0"
      right="0"
      top="0"
      as="nav"
      bg={isDark ? "blue.300" : "darkPurple"}
      transform={scrollingUp ? "translateY(0)" : "translateY(-10rem)"}
      transition="transform 0.3s ease-in-out"
      zIndex="999"
    >
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
            <Menu>
              <MenuButton>
                <Text variant="link">Browse</Text>
              </MenuButton>
              <MenuList
                bgColor={isDark ? "blue.400" : "white"}
                border="0"
                mt="0.5rem"
              >
                <MenuHoverBox />
              </MenuList>
            </Menu>

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
            <Link to="/signup">
              <Button variant="primary" ml="2rem">
                Sign Up
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
