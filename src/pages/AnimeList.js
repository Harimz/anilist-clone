import React from "react";
import { ProfileHeader } from "../components/Profile/ProfileHeader";
import { UserAnimeList } from "../components/Profile/Lists/UserAnimeList";

export const AnimeList = () => {
  return (
    <>
      <ProfileHeader />
      <UserAnimeList />
    </>
  );
};
