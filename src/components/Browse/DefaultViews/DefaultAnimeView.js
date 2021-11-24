import React from "react";
import { TopAnime } from "../../TopAnime/TopAnime";
import { BrowseContent } from "../BrowseContent";

export const DefaultAnimeView = () => {
  return (
    <>
      <BrowseContent type="anime" searchType="trending" title="TRENDING NOW" />
      <BrowseContent
        type="anime"
        searchType="top-100"
        title="ALLTIME POPULAR"
      />
      <TopAnime />
    </>
  );
};
