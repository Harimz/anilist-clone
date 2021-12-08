import React from "react";
import { Flex, Button, Spinner } from "@chakra-ui/react";

export const StatusSubmit = ({
  setWriteStatus,
  setStatus,
  isLoading,
  postStatusHandler,
}) => {
  return (
    <Flex justify="flex-end" mt="1rem" gridGap="1rem">
      <Button
        bgColor="blue.400"
        color="gray.400"
        onClick={() => {
          setWriteStatus(false);
          setStatus("");
        }}
      >
        Cancel
      </Button>
      <Button
        bgColor="gray.425"
        fontWeight="semibold"
        color="white"
        onClick={postStatusHandler}
      >
        {isLoading ? <Spinner color="white" /> : "Publish"}
      </Button>
    </Flex>
  );
};
