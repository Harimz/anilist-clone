import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  useColorMode,
  Spacer,
  Popover,
  PopoverTrigger,
  PopoverContent,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { DeleteModal } from "./DeleteModal";
import { EditModal } from "./EditModal";

export const StatusMessage = ({ pic, username, statusMessage, id }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [editHover, setEditHover] = useState(false);
  const [deleteHover, setDeleteHover] = useState(false);
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();

  return (
    <>
      <DeleteModal onClose={onDeleteClose} isOpen={isDeleteOpen} id={id} />

      <EditModal
        onClose={onEditClose}
        isOpen={isEditOpen}
        id={id}
        initialValue={statusMessage}
      />

      <Box bgColor={isDark ? "blue.400" : "white"} p="1rem" mb="1rem">
        <Flex align="center">
          <Image src={pic} h="3rem" mr="1rem" />
          <Text color="gray.400" fontSize="0.85rem">
            {username}
          </Text>
          <Spacer />
          <Popover>
            <PopoverTrigger>
              <IconButton
                icon={<BsThreeDots />}
                color={isDark ? "white" : "gray.400"}
              />
            </PopoverTrigger>
            <PopoverContent
              w="7rem"
              color={isDark ? "white" : "gray.400"}
              p="0.5rem 0"
            >
              <Flex
                align="center"
                cursor="pointer"
                p="0.5rem"
                onMouseOver={() => setEditHover(true)}
                onMouseOut={() => setEditHover(false)}
                bgColor={editHover ? "blue.150" : "none"}
                onClick={onEditOpen}
              >
                <FiEdit2 />
                <Text ml="1rem">Edit</Text>
              </Flex>
              <Flex
                align="center"
                cursor="pointer"
                p="0.5rem"
                onMouseOver={() => setDeleteHover(true)}
                onMouseOut={() => setDeleteHover(false)}
                bgColor={deleteHover ? "blue.150" : "none"}
                onClick={onDeleteOpen}
              >
                <FaTimes />
                <Text ml="1rem">Delete</Text>
              </Flex>
            </PopoverContent>
          </Popover>
        </Flex>
        <Text color="gray.400" m="1rem 0 2rem 0">
          {statusMessage}
        </Text>
      </Box>
    </>
  );
};
