import React from "react";
import { TopAnimeCard } from "./TopAnimeCard";
import { TopAnimeMobileCard } from "./TopAnimeMobileCard";

export const LargeCard = ({ anime }) => {
  return (
    <>
      <TopAnimeCard anime={anime} />
      <TopAnimeMobileCard anime={anime} />
    </>
  );
};
