import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { setGenres } from "../../app/filterSlice";
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
import { useSearchParams, useParams } from "react-router-dom";

export const Filter = () => {
  const dispatch = useDispatch();
  const { content } = useParams();
  const { genres: filteredGenres } = useSelector((state) => state.filter);
  const [filterInputs, setFilterInputs] = useState({
    search: "",
    type: "",
    status: "",
    sort: "",
  });
  const [search, setSearch] = useState("");
  const { colorMode } = useColorMode();
  const [searchParams, setSearchParams] = useSearchParams();
  const isDark = colorMode === "dark";

  useEffect(() => {
    const queryObj = {
      ...(filteredGenres.length !== 0 && { genres: filteredGenres.toString() }),
      ...(filterInputs.type && { type: filterInputs.type }),
      ...(filterInputs.status && { status: filterInputs.status }),
      ...(filterInputs.sort && { sort: filterInputs.sort }),
    };

    const timeOutId = setTimeout(() => setSearch(filterInputs.search), 2000);

    setSearchParams({
      ...queryObj,
      ...(filterInputs.search && { q: search }),
    });

    return () => clearTimeout(timeOutId);
  }, [filterInputs, filteredGenres, search]);

  return (
    <Container maxW="container.xl" mt="4rem">
      <form>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(6, 1fr)" }}
          gap={10}
          color={isDark ? "gray.200" : "gray.500"}
        >
          <Box>
            <Text mb="1rem">Search</Text>
            <Input
              onChange={({ target }) => {
                setFilterInputs((prevState) => ({
                  ...prevState,
                  search: target.value,
                }));
              }}
              min={3}
            />
          </Box>
          <Box>
            <Text mb="1rem">Genres</Text>
            <Select
              placeholder="Any"
              onChange={({ target }) => {
                dispatch(setGenres({ value: target.value }));
                // genresHandler();
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
                setFilterInputs((prevState) => ({
                  ...prevState,
                  type: target.value,
                }));
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
              onChange={({ target }) =>
                setFilterInputs((prevState) => ({
                  ...prevState,
                  status: target.value,
                }))
              }
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
              onChange={({ target }) =>
                setFilterInputs((prevState) => ({
                  ...prevState,
                  sort: target.value,
                }))
              }
            >
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
          {filteredGenres.length !== 0 && (
            <FaTags size={24} style={{ color: "gray" }} />
          )}
          {filteredGenres &&
            filteredGenres.map((genre, index) => (
              <FilterTag key={index} genre={genres[genre - 1]} tagId={genre} />
            ))}
        </Flex>
      </Container>
    </Container>
  );
};
