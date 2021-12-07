import React, { useState } from "react";
import {
  Container,
  Input,
  Text,
  Flex,
  Button,
  Box,
  Image,
  useColorMode,
  Spinner,
} from "@chakra-ui/react";
import { useAuth } from "../../hooks/useAuth";
import { useAddStatusMutation } from "../../app/services/userApi";

export const Status = () => {
  const [writeStatus, setWriteStatus] = useState(false);
  const [status, setStatus] = useState("");
  const { colorMode } = useColorMode();
  const { user } = useAuth();
  const isDark = colorMode === "dark";
  const [postStatus, { isLoading }] = useAddStatusMutation();

  const postStatusHandler = async () => {
    const statusMessage = await postStatus({ statusMessage: status });

    if (statusMessage.data) {
      setStatus("");
      setWriteStatus(false);
    }
  };

  return (
    <Container maxW="container.md" mt="2rem">
      <Text color="gray.400" fontWeight="semibold" mb="1rem">
        Activity
      </Text>
      <Input
        placeholder="Write a status..."
        color="gray.400"
        value={status}
        onClick={() => setWriteStatus(true)}
        onChange={({ target }) => setStatus(target.value)}
      />
      {status && (
        <Box>
          <Text color="gray.400" m="1rem 0">
            Preview
          </Text>
          <Box bgColor={isDark ? "blue.400" : "white"} p="1rem">
            <Flex align="center">
              <Image src={user.pic} h="3rem" mr="1rem" />
              <Text color="gray.400" fontSize="0.85rem">
                {user.username}
              </Text>
            </Flex>
            <Text color="gray.400" m="1rem 0 2rem 0">
              {status}
            </Text>
          </Box>
        </Box>
      )}
      {writeStatus && (
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
      )}
    </Container>
  );
};
