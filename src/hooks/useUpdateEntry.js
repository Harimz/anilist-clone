import {
  useUpdateAnimeMutation,
  useUpdateMangaMutation,
} from "../app/services/userApi";
import { useToast } from "@chakra-ui/react";

const useUpdateEntry = (onClose, userInputs, type) => {
  const [updateAnime] = useUpdateAnimeMutation();
  const [updateManga] = useUpdateMangaMutation();
  const toast = useToast();

  const updateEntry = async (id, info) => {
    try {
      if (type === "anime") {
        await updateAnime({
          id,
          updatedInfo: {
            status: userInputs.status,
            score: userInputs.score,
            episodeProgress: userInputs.episodeProgress,
            totalRewatches: userInputs.totalRewatches,
            startDate: userInputs.startDate,
            endDate: userInputs.endDate,
          },
        });

        onClose();

        toast({
          title: `${info.title} has been updated!`,
          isClosable: true,
          status: "success",
          variant: "subtle",
          position: "top",
        });
      }

      if (type === "manga") {
        await updateManga({
          id,
          updatedInfo: {
            status: userInputs.status,
            score: userInputs.score,
            volumesRead: userInputs.volumesRead,
            totalRereads: userInputs.totalRereads,
            startDate: userInputs.startDate,
            endDate: userInputs.endDate,
          },
        });

        onClose();

        toast({
          title: `${info.title} has been updated!`,
          isClosable: true,
          status: "success",
          variant: "subtle",
          position: "top",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { updateEntry };
};

export default useUpdateEntry;
