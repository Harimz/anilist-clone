import {
  useDeleteAnimeMutation,
  useDeleteMangaMutation,
} from "../app/services/userApi";
import { useToast } from "@chakra-ui/react";

const useDeleteEntry = (onClose, type) => {
  const [deleteAnime] = useDeleteAnimeMutation();
  const [deleteManga] = useDeleteMangaMutation();
  const toast = useToast();

  const deleteEntry = async (id, title) => {
    if (type === "anime") {
      await deleteAnime(id);

      onClose();

      toast({
        title: `${title} has been deleted!`,
        isClosable: true,
        status: "success",
        variant: "subtle",
        position: "top",
      });
    }

    if (type === "manga") {
      await deleteManga(id);

      onClose();

      toast({
        title: `${title} has been deleted!`,
        isClosable: true,
        status: "success",
        variant: "subtle",
        position: "top",
      });
    }
  };

  return { deleteEntry };
};

export default useDeleteEntry;
