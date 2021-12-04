import React from "react";
import { Input } from "@chakra-ui/input";
import { Box, Grid, Text } from "@chakra-ui/layout";
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import { Select } from "@chakra-ui/select";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useColorMode } from "@chakra-ui/color-mode";
import * as addOptions from "../../constants/addOptions";
import { useDispatch } from "react-redux";
import { setAnimeEntry } from "../../app/userSlice";

export const AddContentForm = ({ type }) => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const isDark = colorMode === "dark";

  const options = type === "anime" ? addOptions.anime : addOptions.manga;

  return (
    <Box p="2rem" bgColor={isDark ? "blue.500" : "white"}>
      <Grid
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap="2rem"
        mt="2rem"
      >
        <Box>
          <Text color="gray.400">Status</Text>
          <Select
            color="gray.500"
            onChange={({ target }) =>
              dispatch(setAnimeEntry({ type: "status", value: target.value }))
            }
          >
            {options.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </Box>

        <Box>
          <Text color="gray.400">Score</Text>
          <NumberInput
            defaultValue={0}
            min={0}
            max={10}
            color="gray.500"
            onChange={(value) =>
              dispatch(setAnimeEntry({ type: "score", value: +value }))
            }
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>

        <Box>
          <Text color="gray.400">
            {type === "anime" ? "Episode Progress" : "Volumes Read"}
          </Text>
          <NumberInput
            defaultValue={0}
            min={0}
            max={10}
            color="gray.500"
            onChange={(value) =>
              dispatch(
                setAnimeEntry({
                  type: `${
                    type === "anime" ? "episodeProgress" : "volumesRead"
                  }`,
                  value: +value,
                })
              )
            }
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>

        <Box>
          <Text color="gray.400">Start Date</Text>
          <DatePicker
            onChange={(date) => {
              console.log(date.toString());
              dispatch(setAnimeEntry({ type: "startDate", value: date }));
            }}
            customInput={<Input color="gray.500" />}
          />
        </Box>

        <Box>
          <Text color="gray.400">Finish Date</Text>
          <DatePicker
            onChange={(date) =>
              dispatch(setAnimeEntry({ type: "finishDate", value: date }))
            }
            customInput={<Input color="gray.500" />}
          />
        </Box>

        <Box>
          <Text color="gray.400">
            {type === "anime" ? "Total Rewatches" : "Total ReReads"}
          </Text>
          <NumberInput
            defaultValue={0}
            min={0}
            color="gray.500"
            onChange={(value) =>
              dispatch(
                setAnimeEntry({
                  type: `${
                    type === "anime" ? "totalRewatches" : "totalRereads"
                  }`,
                  value: +value,
                })
              )
            }
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
      </Grid>

      <Box mt="3rem">
        <Text color="gray.400">Notes</Text>
        <Input
          size="lg"
          color="gray.500"
          onChange={({ target }) =>
            dispatch(setAnimeEntry({ type: "notes", value: target.value }))
          }
        />
      </Box>
    </Box>
  );
};
