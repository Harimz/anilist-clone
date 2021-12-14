import React from "react";
import { FaTimes } from "react-icons/fa";
import { Box, Flex, Image, Text, Spacer, Button } from "@chakra-ui/react";
import banner from "../../../assets/images/anime-banner.png";
import { useAddToList, useUpdateEntry } from "../../../hooks";

export const ModalHeader = ({
  onClose,
  contentInfo,
  userInputs,
  type,
  content,
}) => {
  const { addToList } = useAddToList(onClose, userInputs, type);
  const { updateEntry } = useUpdateEntry(onClose, userInputs, type);

  console.log(contentInfo);

  return (
    <>
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
            src={contentInfo.image}
            zIndex="10"
            mr="2rem"
            transform="translateY(4rem)"
          />
          <Text fontWeight="semibold" color="white">
            {contentInfo.title}
          </Text>
          <Spacer />
          <Button
            variant="form"
            onClick={() => {
              if (content) {
                console.log("This worked atleast");
                updateEntry(content._id, { title: content.title });
              }

              if (!content) {
                addToList({
                  id: contentInfo.id,
                  title: contentInfo.title,
                  episodeCount: contentInfo.episodeCount,
                  volumeCount: contentInfo.volumeCount,
                  animeType: contentInfo.animeType,
                  mangaType: contentInfo.mangaType,
                  image: contentInfo.image,
                });
              }
            }}
          >
            Save
          </Button>
        </Flex>
      </Box>
    </>
  );
};
