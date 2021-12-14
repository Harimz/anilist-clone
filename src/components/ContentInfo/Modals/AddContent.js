import React, { useState, useEffect } from "react";
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";

import "react-datepicker/dist/react-datepicker.css";

import { AddContentForm } from "./AddContentForm";

import { ModalHeader } from "./ModalHeader";

export const AddContent = ({
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

  const setDate = (date) => {
    if (date) {
      return new Date(date);
    } else {
      return null;
    }
  };

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
        <ModalHeader
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
        <AddContentForm
          type={type}
          content={content}
          setUserInputs={setUserInputs}
          userInputs={userInputs}
        />
      </ModalContent>
    </Modal>
  );
};
