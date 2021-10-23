import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Input,
  Select,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormat,
  setGenres,
  setSearchValue,
  setPublishingStatus,
  setSort,
} from "../../app/filterSlice";
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

export const Filter = () => {
  const dispatch = useDispatch();
  const { content } = useParams();
  const { genres: genreList } = useSelector((state) => state.filter);
  const [searchInput, setSearchInput] = useState("");
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setSearchValue({ search: searchInput }));
  };

  const genreHandler = (e) => {
    const value = e.target.value;

    dispatch(setGenres({ value: value }));
  };

  const formatHandler = (e) => {
    const value = e.target.value;

    dispatch(setFormat({ format: value }));
  };

  const publishingHandler = (e) => {
    const value = e.target.value;

    dispatch(setPublishingStatus({ status: value }));
  };

  const sortHandler = (e) => {
    const value = e.target.value;

    dispatch(setSort({ sort: value }));
  };

  return (
    <Container maxW="container.xl" mt="4rem">
      <form onSubmit={submitHandler}>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(6, 1fr)" }}
          gap={10}
          color={isDark ? "gray.200" : "gray.500"}
        >
          <Box>
            <Text mb="1rem">Search</Text>
            <Input
              onChange={({ target }) => setSearchInput(target.value)}
              min={3}
            />
          </Box>
          <Box>
            <Text mb="1rem">Genres</Text>
            <Select placeholder="Any" onChange={genreHandler}>
              {genres.map((genre, i) => (
                <option value={i + 1}>{genre}</option>
              ))}
            </Select>
          </Box>
          <Box>
            <Text mb="1rem">Format</Text>
            <Select placeholder="Any" onChange={formatHandler}>
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
            <Select placeholder="Any" onChange={publishingHandler}>
              {publishingStatus.map((status) => (
                <option value={status}>{upperCase(status)}</option>
              ))}
            </Select>
          </Box>
          <Box>
            <Text mb="1rem">Sort</Text>
            <Select placeholder="Any" onChange={sortHandler}>
              {sort.map((type) => (
                <option value={type}>{upperCase(type)}</option>
              ))}
            </Select>
          </Box>
          <Button alignSelf="end" variant="form" type="submit">
            Search
          </Button>
        </Grid>
      </form>
      <Container maxW="container.xl" mt="2rem">
        <Flex gridGap={5} alignItems="center">
          {genreList.length !== 0 && (
            <FaTags size={24} style={{ color: "gray" }} />
          )}
          {genreList &&
            genreList.map((genre) => (
              <FilterTag genre={genres[genre - 1]} tagId={genre} />
            ))}
        </Flex>
      </Container>
    </Container>
  );
};
