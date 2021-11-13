import React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  Input,
  Select,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { removeGenres, setFilters, setGenres } from "../../app/filterSlice";
import {
  animeFormats,
  genres,
  mangaFormats,
  publishingStatus,
  sort,
} from "../../constants/filterOptions";
import { FilterTag } from "./FilterTag";
import { FaTags } from "react-icons/fa";
import { upperCase } from "../../helpers";
import { useParams, useLocation } from "react-router-dom";
import { useFilter } from "../../hooks";

export const Filter = () => {
  const dispatch = useDispatch();
  const { content } = useParams();
  const { genres: filteredGenres, search: userSearch } = useSelector(
    (state) => state.filter
  );
  const { colorMode } = useColorMode();
  const { filterRedirect } = useFilter();
  const location = useLocation();
  const isDark = colorMode === "dark";

  return (
    <Container maxW="container.xl" mt="4rem">
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(5, 1fr)" }}
        gap={10}
        color={isDark ? "gray.200" : "gray.500"}
      >
        <Box>
          <Text mb="1rem">Search</Text>
          <Input
            onChange={({ target }) => {
              dispatch(setFilters({ type: "search", value: target.value }));
              filterRedirect();
            }}
            min={3}
            value={userSearch}
            autoFocus={location.pathname === "/" ? false : true}
          />
        </Box>
        <Box>
          <Text mb="1rem">Genres</Text>
          <Select
            placeholder="Any"
            onChange={({ target }) => {
              if (target.value !== "") {
                dispatch(setGenres({ value: target.value }));
                filterRedirect();
              } else {
                dispatch(removeGenres({ type: "REMOVE_ALL" }));
              }
            }}
          >
            {genres.map((genre, i) => (
              <option value={i + 1}>{genre}</option>
            ))}
          </Select>
        </Box>
        <Box>
          <Text mb="1rem">Format</Text>
          <Select
            placeholder="Any"
            onChange={({ target }) => {
              dispatch(
                setFilters({
                  type: "type",
                  value: target.value,
                })
              );
            }}
          >
            {content === "anime" &&
              animeFormats.map((format) => (
                <option value={format}>{upperCase(format)}</option>
              ))}
            {content === "manga" &&
              mangaFormats.map((format) => (
                <option value={format}>{upperCase(format)}</option>
              ))}
          </Select>
        </Box>
        <Box>
          <Text mb="1rem">Publishing Status</Text>
          <Select
            placeholder="Any"
            onChange={({ target }) => {
              dispatch(setFilters({ type: "status", value: target.value }));
            }}
          >
            {publishingStatus.map((status) => (
              <option value={status}>{upperCase(status)}</option>
            ))}
          </Select>
        </Box>
        <Box>
          <Text mb="1rem">Sort</Text>
          <Select
            placeholder="Any"
            onChange={({ target }) => {
              dispatch(setFilters({ type: "sort", value: target.value }));
            }}
          >
            {sort.map((type) => (
              <option value={type}>{upperCase(type)}</option>
            ))}
          </Select>
        </Box>
      </Grid>
      <Container maxW="container.xl" mt="2rem">
        {location.pathname !== "/" && (
          <Flex gridGap={5} alignItems="center">
            {filteredGenres.length !== 0 && (
              <FaTags size={24} style={{ color: "gray" }} />
            )}
            {filteredGenres &&
              filteredGenres.map((genre, index) => (
                <FilterTag
                  key={index}
                  genre={genres[genre - 1]}
                  tagId={genre}
                />
              ))}
          </Flex>
        )}
      </Container>
    </Container>
  );
};
