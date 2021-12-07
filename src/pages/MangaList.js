import React from "react";
import { ListViews } from "../components/Profile/Lists/ListViews";
import { UserMangaList } from "../components/Profile/Lists/UserMangaList";
import { ProfileHeader } from "../components/Profile/ProfileHeader";

export const MangaList = () => {
  return (
    <>
      <ProfileHeader />
      <ListViews />
      <UserMangaList />
    </>
  );
};
