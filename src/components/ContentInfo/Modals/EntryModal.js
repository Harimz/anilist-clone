import React, { useState, useEffect } from "react";
import {
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Button,
} from "@chakra-ui/react";

import "react-datepicker/dist/react-datepicker.css";

import { EntryModalForm } from "./EntryModalForm";
import { EntryModalHeader } from "./EntryModalHeader";
import { useDeleteEntry, useIsDark } from "../../../hooks";
import { setDate } from "../../../helpers";

export const EntryModal = ({
  onClose,
  image,
  id,
  type,
  title,
  episodeCount,
  volumeCount,
  animeType,
  mangaType,
  isOpen,
  content,
}) => {
  const [userInputs, setUserInputs] = useState({
    status: type === "anime" ? "Watching" : "Reading",
    score: 0,
    episodeProgress: 0,
    volumesRead: 0,
    startDate: "",
    endDate: "",
    totalRewatches: 0,
    totalRereads: 0,
    note: "",
  });
  const { isDark } = useIsDark();
  const { deleteEntry } = useDeleteEntry(onClose, type);

  useEffect(() => {
    if (content) {
      setUserInputs(() => ({
        status: content?.status,
        score: content?.score,
        episodeProgress: content?.episodeProgress,
        volumesRead: content?.volumesRead || 0,
        totalRewatches: content?.totalRewatches,
        totalRereads: content?.totalRereads,
        startDate: setDate(content?.startDate),
        endDate: setDate(content?.endDate),
        note: content?.note,
      }));
    }
  }, [content]);

  return (
    <Modal isOpen={isOpen} size="5xl">
      <ModalOverlay />
      <ModalContent position="relative">
        <EntryModalHeader
          onClose={onClose}
          contentInfo={{
            title,
            image,
            id,
            episodeCount,
            volumeCount,
            animeType,
            mangaType,
          }}
          userInputs={userInputs}
          type={type}
          content={content}
        />
        <EntryModalForm
          type={type}
          content={content}
          setUserInputs={setUserInputs}
          userInputs={userInputs}
        />
        {content && (
          <Flex
            p="0rem 2rem 1rem 2rem"
            justify="flex-end"
            bgColor={isDark ? "blue.500" : "white"}
          >
            <Button
              bgColor="red.300"
              color="white"
              _hover={{}}
              onClick={() => deleteEntry(content._id, content.title)}
            >
              Delete
            </Button>
          </Flex>
        )}
      </ModalContent>
    </Modal>
  );
};
