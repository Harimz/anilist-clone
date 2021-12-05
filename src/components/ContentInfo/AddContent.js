import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  ModalContent,
  Spacer,
  Text,
} from "@chakra-ui/react";

import "react-datepicker/dist/react-datepicker.css";

import banner from "../../assets/images/anime-banner.png";
import { FaTimes } from "react-icons/fa";
import { AddContentForm } from "./AddContentForm";
import {
  useAddAnimeMutation,
  useAddMangaMutation,
} from "../../app/services/userApi";
import { useSelector } from "react-redux";

export const AddContent = ({
  onClose,
  image,
  id,
  type,
  title,
  episodes,
  volumes,
}) => {
  const { contentEntry } = useSelector((state) => state.user);
  const [addAnime, { isLoading: loadingAnime, isError: animeError }] =
    useAddAnimeMutation();
  const [addManga, { isLoading: loadingManga, isError: mangaError }] =
    useAddMangaMutation();

  console.log(type);

  const addToListHandler = async () => {
    try {
      if (type === "anime") {
        const result = await addAnime({
          ...contentEntry,
          animeID: id,
          image,
          title,
          episodeCount: episodes,
        });

        console.log(result);
      }

      if (type === "manga") {
        const result = await addManga({
          ...contentEntry,
          image,
          title,
          mangaID: id,
          volumeCount: volumes,
        });

        console.log(id);
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          <Image
            h={{ base: "7rem", md: "11rem" }}
            src={image}
            zIndex="10"
            mr="2rem"
            transform="translateY(4rem)"
          />
          <Text fontWeight="semibold" color="white">
            {title}
          </Text>
          <Spacer />
          <Button variant="form" onClick={addToListHandler}>
            Save
          </Button>
        </Flex>
      </Box>
      <AddContentForm type={type} />
    </ModalContent>
  );
};
