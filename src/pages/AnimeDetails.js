import React from "react";
import { AnimeInfo } from "../components/Anime/AnimeInfo";
import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navbar/Navigation";

export const AnimeDetails = () => {
  return (
    <>
      <Navigation />
      <AnimeInfo />
      <Footer />
    </>
  );
};
