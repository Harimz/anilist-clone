import { useEffect } from "react";
import { useGetAnimeQuery, useGetMangaQuery } from "../app/services/userApi";
import { useDispatch } from "react-redux";
import { setAnimeList, setMangaList } from "../app/userSlice";

const useStoreList = () => {
  const { data: anime, isFetching: animeIsFetching } = useGetAnimeQuery();
  const { data: manga, isFetching: mangaIsFetching } = useGetMangaQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    const animelist = animeIsFetching ? [] : anime;
    const mangalist = mangaIsFetching ? [] : manga;

    dispatch(setAnimeList({ data: animelist }));
    dispatch(setMangaList({ data: mangalist }));
  }, [anime, manga, dispatch, animeIsFetching, mangaIsFetching]);
};

export default useStoreList;
