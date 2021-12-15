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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useIsDark, useScrollDirection } from "../../hooks";
import { FaChevronDown } from "react-icons/fa";

import logo from "../../assets/images/icon.svg";
import MenuHoverBox from "./MenuHoverBox";
import { useAuth } from "../../hooks/useAuth";
import { UserHoverBox } from "../Profile/UserHoverBox";

export const Navbar = () => {
  const { isDark } = useIsDark();

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
      display={{ base: "none", md: "block" }}
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
            <Menu placement="bottom">
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
              <Link to={`/user/${user.username}`}>
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
                <Flex align="center">
                  <Menu placement="bottom">
                    <MenuButton>
                      <Flex align="center">
                        <Image src={user.pic} h="3rem" mx="0.75rem" />
                        <FaChevronDown style={{ color: "gray" }} />
                      </Flex>
                    </MenuButton>
                    <MenuList p={0} border="none">
                      <UserHoverBox user={user} />
                    </MenuList>
                  </Menu>
                </Flex>
              </>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
