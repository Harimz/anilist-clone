import React from "react";
import {
  Modal,
  ModalContent,
  ModalOverlay,
  Flex,
  Text,
  Button,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import { useDeleteMessageMutation } from "../../../app/services/userApi";
import { useIsDark } from "../../../hooks";

export const DeleteModal = ({ isOpen, onClose, id }) => {
  const { isDark } = useIsDark();
  const [deleteMessage] = useDeleteMessageMutation();
  const toast = useToast();

  const deleteHandler = async () => {
    const res = await deleteMessage(id);

    if (res.error.data) {
      toast({
        title: "Message has been deleted",
        status: "success",
        isClosable: true,
        position: "top",
        variant: "subtle",
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        p="0.75rem"
        bgColor={isDark ? "blue.500" : "white"}
        color="gray.400"
      >
        <Flex mb="1rem" fontWeight="semibold">
          <Text>Warning</Text>
          <Spacer />
          <FaTimes cursor="pointer" onClick={onClose} />
        </Flex>
        <Text mb="1rem">Are you sure you want to delete this message?</Text>
        <Flex justify="flex-end" gridGap="1rem">
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="form" fontWeight="normal" onClick={deleteHandler}>
            OK
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
