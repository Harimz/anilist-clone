import { useToast } from "@chakra-ui/react";
import {
  useAddAnimeMutation,
  useAddMangaMutation,
} from "../app/services/userApi";

const useAddToList = (onClose, userInputs, type) => {
  const [addManga] = useAddMangaMutation();
  const [addAnime] = useAddAnimeMutation();
  const toast = useToast();

  const addToList = async (info) => {
    try {
      if (type === "anime") {
        await addAnime({
          ...userInputs,
          animeID: info.id,
          image: info.image,
          title: info.title,
          animeType: info.animeType,
          episodeCount: +info.episodeCount,
        });

        onClose();

        toast({
          title: `${info.title} has been added to your anime list!`,
          isClosable: true,
          status: "success",
          variant: "subtle",
          position: "top",
        });
      }

      if (type === "manga") {
        await addManga({
          ...userInputs,
          image: info.image,
          title: info.title,
          mangaType: info.mangaType,
          mangaID: info.id,
          volumeCount: info.volumeCount,
        });

        onClose();

        toast({
          title: `${info.title} has been added to your manga list!`,
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

  return { addToList };
};

export default useAddToList;
