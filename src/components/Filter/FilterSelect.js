import React from "react";
import { Box, Select, Text, useColorMode } from "@chakra-ui/react";
import { upperCase } from "../../helpers/index";

export const FilterSelect = ({ title, options }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box>
      <Text mb="1rem" color="gray.500">
        {title}
      </Text>
      <Select
        variant="filled"
        bgColor={isDark ? "blue.400" : "#FBFBFB"}
        boxShadow={isDark ? "" : " 0 14px 30px #C9D7E3AA,0 4px 4px #C9D7E3AA"}
        placeholder="Any"
        color="gray.500"
      >
        {options.map((option, i) => (
          <option key={i} value={option}>
            {upperCase(option)}
          </option>
        ))}
      </Select>
    </Box>
  );
};
