import React, { useState } from "react";
import { Container, Input, Text, Box } from "@chakra-ui/react";
import { useAuth } from "../../hooks/useAuth";
import {
  useAddStatusMutation,
  useGetMessagesQuery,
} from "../../app/services/userApi";
import { StatusPreview } from "./StatusMessages/StatusPreview";
import { StatusSubmit } from "./StatusMessages/StatusSubmit";
import { StatusMessage } from "./StatusMessages/StatusMessage";
import { Loading } from "../Loading/Loading";

export const Status = () => {
  const [writeStatus, setWriteStatus] = useState(false);
  const [status, setStatus] = useState("");
  const { user } = useAuth();
  const [postStatus, { isLoading }] = useAddStatusMutation();
  const { data, isFetching } = useGetMessagesQuery();

  const postStatusHandler = async () => {
    const statusMessage = await postStatus({ statusMessage: status });

    if (statusMessage.data) {
      setStatus("");
      setWriteStatus(false);
    }
  };

  if (isFetching) {
    return <Loading />;
  }

  return (
    <Container maxW="container.md" mt="2rem" mb="25rem">
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
        <StatusPreview
          pic={user.pic}
          username={user.username}
          status={status}
        />
      )}
      {writeStatus && (
        <StatusSubmit
          setWriteStatus={setWriteStatus}
          setStatus={setStatus}
          isLoading={isLoading}
          postStatusHandler={postStatusHandler}
        />
      )}
      <Box mt="2rem">
        {data.map((message) => (
          <StatusMessage
            key={message._id}
            pic={user.pic}
            username={user.username}
            statusMessage={message.statusMessage}
            id={message._id}
          />
        ))}
      </Box>
    </Container>
  );
};
