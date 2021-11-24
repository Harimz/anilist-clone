import React from "react";
import { BrowseContent } from "../BrowseContent";

export const DefaultMangaView = () => {
  return (
    <>
      <BrowseContent
        type="manga"
        searchType="top-100"
        title="ALLTIME POPULAR"
        amount={5}
      />
      <BrowseContent
        type="manga"
        searchType="top-manhwa"
        title="TOP MANHWA"
        amount={5}
      />
    </>
  );
};
