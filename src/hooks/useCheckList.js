import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useCheckList = (type, id) => {
  const { animelist, mangalist } = useSelector((state) => state.user);
  const [content, setContent] = useState({});

  useEffect(() => {
    if (type === "anime") {
      const exists = animelist.find((anime) => anime.animeID === id);

      setContent(exists);
    }

    if (type === "manga") {
      const exists = mangalist.find((manga) => manga.mangaID === id);

      setContent(exists);
    }
  }, [animelist, mangalist, id, type]);

  return { content };
};

export default useCheckList;
