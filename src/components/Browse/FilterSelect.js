import React from "react";
import { Box, Select, Text } from "@chakra-ui/react";
import { upperCase } from "../../helpers/index";

export const FilterSelect = ({ title, options }) => {
  return (
    <Box>
      <Text mb="1rem" color="gray.500">
        {title}
      </Text>
      <Select
        variant="filled"
        bgColor="#FBFBFB"
        boxShadow=" 0 14px 30px #C9D7E3AA,0 4px 4px #C9D7E3AA"
        placeholder="Any"
        color="gray.500"
      >
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </Box>
  );
};
