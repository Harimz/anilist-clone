import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  ModalContent,
  Spacer,
  Text,
} from "@chakra-ui/react";

import banner from "../../assets/images/anime-banner.png";
import { FaTimes } from "react-icons/fa";

export const AddContent = ({ onClose, image, id, type, title }) => {
  return (
    <ModalContent position="relative">
      <FaTimes
        size={22}
        style={{
          position: "absolute",
          color: "white",
          top: "1rem",
          right: "1rem",
          cursor: "pointer",
          zIndex: "10",
        }}
        onClick={onClose}
      />
      <Box
        pos="relative"
        bg="rgba(0,0,0,0.9)"
        _before={{
          content: '""',
          bgImage: banner,
          bgSize: "cover",
          bgPos: "center",
          pos: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          opacity: 0.3,
        }}
      >
        <Flex mt="2rem" w="100%" align="flex-end" p="2rem">
          <Image h="11rem" src={image} zIndex="10" mr="2rem" />
          <Text fontWeight="semibold" color="white">
            {title}
          </Text>
          <Spacer />
          <Button variant="primary">Save</Button>
        </Flex>
      </Box>
    </ModalContent>
  );
};
