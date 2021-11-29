import React from "react";
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
import { useScrollDirection } from "../../hooks";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { User } from "../Profile/User";

import logo from "../../assets/images/icon.svg";
import MenuHoverBox from "./MenuHoverBox";
import { useAuth } from "../../hooks/useAuth";

export const Navbar = () => {
  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";

  const { scrollDirection } = useScrollDirection();
  const scrollingUp = scrollDirection === "UP";

  const { user } = useAuth();

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
        <Link to={user ? "/search/anime" : "/"}>
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
            {user && (
              <Link to="/profile">
                <Text variant="link">Profile</Text>
              </Link>
            )}
          </SimpleGrid>
          <Flex align="center">
            {!user && (
              <>
                <Text variant="link">
                  <Link to="/login">Login</Link>
                </Text>
                <Link to="/signup">
                  <Button variant="primary" ml="2rem">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
            {user && (
              <>
                <FaSearch style={{ color: "gray" }} size={22} />
                <User user={user} />
                <FaChevronDown style={{ color: "gray" }} />
              </>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
