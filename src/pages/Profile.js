import React from "react";
import { Navigation } from "../components/Navbar/Navigation";
import { Header } from "../components/Profile/Header";
import { ProfilePage } from "../components/Profile/ProfilePage";

export const Profile = () => {
  return (
    <>
      <Navigation />
      <ProfilePage />
    </>
  );
};
