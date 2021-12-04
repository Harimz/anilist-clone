import React from "react";
import { TopAnime } from "../components/TopAnime/TopAnime";
import { Header } from "../components/Header/Header";
import { Filter } from "../components/Filter/Filter";
import { BrowseContent } from "../components/Browse/BrowseContent";

export const Home = () => {
  return (
    <>
      <Header />
      <Filter />
      <BrowseContent type="anime" searchType="trending" title="TRENDING NOW" />
      <BrowseContent
        type="anime"
        searchType="top-100"
        title="ALLTIME POPULAR"
      />
      <BrowseContent
        type="anime"
        searchType="upcoming"
        title="UPCOMING ANIME"
      />
      <TopAnime />
    </>
  );
};
