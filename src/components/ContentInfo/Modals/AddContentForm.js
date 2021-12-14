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
import * as addOptions from "../../../constants/addOptions";

export const AddContentForm = ({
  type,
  content,
  setUserInputs,
  startDate,
  finishDate,
  userInputs,
}) => {
  const { colorMode } = useColorMode();
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
            value={userInputs.status}
            onChange={({ target }) => {
              setUserInputs((prevState) => ({
                ...prevState,
                status: target.value,
              }));
            }}
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
            value={userInputs.score}
            min={0}
            max={10}
            color="gray.500"
            onChange={(value) => {
              setUserInputs((prevState) => ({ ...prevState, score: +value }));
            }}
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
            value={userInputs?.episodeProgress || userInputs?.volumesRead}
            color="gray.500"
            onChange={(value) => {
              if (type === "anime") {
                setUserInputs((prevState) => ({
                  ...prevState,
                  episodeProgress: +value,
                }));
              } else {
                setUserInputs((prevState) => ({
                  ...prevState,
                  volumesRead: +value,
                }));
              }
            }}
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
            selected={userInputs.startDate}
            onChange={(date) => {
              setUserInputs((prevState) => ({ ...prevState, startDate: date }));
            }}
            customInput={<Input color="gray.500" />}
          />
        </Box>

        <Box>
          <Text color="gray.400">Finish Date</Text>
          <DatePicker
            selected={userInputs.endDate}
            onChange={(date) => {
              setUserInputs((prevState) => ({
                ...prevState,
                endDate: date,
              }));
            }}
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
            value={userInputs.totalRewatches || userInputs.totalRereads}
            color="gray.500"
            onChange={(value) => {
              if (type === "anime") {
                setUserInputs((prevState) => ({
                  ...prevState,
                  totalRewatches: +value,
                }));
              } else {
                setUserInputs((prevState) => ({
                  ...prevState,
                  totalRereads: +value,
                }));
              }
            }}
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
          value={userInputs.note}
          color="gray.500"
          onChange={({ target }) => {
            setUserInputs((prevState) => ({
              ...prevState,
              note: target.value,
            }));
          }}
        />
      </Box>
    </Box>
  );
};
