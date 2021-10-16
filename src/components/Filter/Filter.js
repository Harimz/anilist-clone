import React from "react";
import {
  Box,
  Container,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FaSearch, FaSlidersH } from "react-icons/fa";
import { genres, seasons, formats, years } from "../../constants/filterOptions";
import { FilterSelect } from "./FilterSelect";

export const Filter = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Container maxW="container.xl" mt="8rem">
      <SimpleGrid columns={6} spacing={6} alignItems="end">
        <Box>
          <Text mb="1rem" color="gray.500">
            Search
          </Text>
          <InputGroup>
            <InputLeftElement
              children={<FaSearch style={{ color: "#C9D7E3AA" }} />}
            />
            <Input
              variant="filled"
              bgColor={isDark ? "blue.400" : "#FBFBFB"}
              boxShadow={
                isDark ? "" : " 0 14px 30px #C9D7E3AA,0 4px 4px #C9D7E3AA"
              }
            />
          </InputGroup>
        </Box>
        <FilterSelect title="Genres" options={genres} />
        <FilterSelect title="Year" options={years} />
        <FilterSelect title="Season" options={seasons} />
        <FilterSelect title="Format" options={formats} />
        <Flex justify="space-between">
          <Box></Box>
          <Menu>
            <MenuButton>
              <IconButton
                icon={<FaSlidersH size={20} style={{ color: "#C9D7E3AA" }} />}
                bgColor={isDark ? "blue.400" : "white"}
                boxShadow={
                  isDark ? "" : " 0 14px 30px #C9D7E3AA,0 4px 4px #C9D7E3AA"
                }
              />
            </MenuButton>
            <MenuList
              bgColor={isDark ? "blue.400" : "white"}
              border="0"
              mt="0.5rem"
            >
              yooo
            </MenuList>
          </Menu>
        </Flex>
      </SimpleGrid>
    </Container>
  );
};
