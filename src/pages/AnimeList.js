import React from "react";
import { ProfileHeader } from "../components/Profile/ProfileHeader";
import { UserAnimeList } from "../components/Profile/Lists/UserAnimeList";
import { ListViews } from "../components/Profile/Lists/ListViews";

export const AnimeList = () => {
  return (
    <>
      <ProfileHeader />
      <ListViews />
      <UserAnimeList />
    </>
  );
};
