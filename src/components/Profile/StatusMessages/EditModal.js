import React, { useState } from "react";
import {
  Modal,
  Input,
  ModalOverlay,
  ModalContent,
  Button,
  Flex,
} from "@chakra-ui/react";
import { StatusPreview } from "./StatusPreview";
import { useAuth } from "../../../hooks/useAuth";
import { useEditMessageMutation } from "../../../app/services/userApi";
import { useIsDark } from "../../../hooks";

export const EditModal = ({ isOpen, onClose, id, initialValue }) => {
  const { user } = useAuth();
  const { isDark } = useIsDark();
  const [updatedMessage, setUpdatedMessage] = useState(initialValue);
  const [editMessage] = useEditMessageMutation();

  const editHandler = async () => {
    await editMessage({ id, updatedMessage });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent p="1rem" bgColor={isDark ? "blue.500" : "white"}>
        <Input
          value={updatedMessage}
          onChange={({ target }) => setUpdatedMessage(target.value)}
          color="gray.400"
        />
        <StatusPreview
          pic={user.pic}
          username={user.username}
          status={updatedMessage}
        />
        <Flex justify="flex-end" mt="1rem" gridGap="1rem">
          <Button onClick={onClose} color="gray.400">
            Cancel
          </Button>
          <Button
            bgColor="gray.400"
            color="white"
            fontWeight="semibold"
            onClick={editHandler}
          >
            Publish
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
