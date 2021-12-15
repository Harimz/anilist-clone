import { Box, Flex, Spacer } from "@chakra-ui/layout";
import React from "react";
import { GiCancel } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

export const ErrorBox = ({ error, closeError, children }) => {
  return (
    <Flex
      p="1rem"
      bgColor="red.100"
      w="25rem"
      position="fixed"
      left="50%"
      transform={`translate(-50%, ${error ? "1rem" : "-15rem"})`}
      transition="transform 0.3s ease"
      align="center"
      borderRadius="0.5rem"
    >
      <GiCancel style={{ marginRight: "1rem", color: "red" }} size={22} />
      <Box>{children}</Box>
      <Spacer />
      <FaTimes cursor="pointer" onClick={closeError} style={{ color: "red" }} />
    </Flex>
  );
};
