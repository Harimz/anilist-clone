import React from "react";
import { BrowseContent } from "../components/Browse/BrowseContent";
import { Filter } from "../components/Filter/Filter";

export const SearchType = () => {
  return (
    <>
      <Filter />
      <BrowseContent amount={100} />
    </>
  );
};
