import React from "react";
import { UserMangaList } from "../components/Profile/Lists/UserMangaList";
import { ProfileHeader } from "../components/Profile/ProfileHeader";

export const MangaList = () => {
  return (
    <>
      <ProfileHeader />
      <UserMangaList />
    </>
  );
};
