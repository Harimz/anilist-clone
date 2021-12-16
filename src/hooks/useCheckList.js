import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useCheckList = (type, id, user) => {
  const { animelist, mangalist } = useSelector((state) => state.user);
  const [content, setContent] = useState({});

  useEffect(() => {
    if (user) {
      if (type === "anime") {
        const exists = animelist.find((anime) => anime.animeID === id);

        setContent(exists ? exists : {});
      }

      if (type === "manga") {
        const exists = mangalist.find((manga) => manga.mangaID === id);

        setContent(exists ? exists : {});
      }
    }
  }, [animelist, mangalist, id, type, user]);

  return { content };
};

export default useCheckList;
