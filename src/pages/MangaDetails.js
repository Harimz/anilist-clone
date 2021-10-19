import React from "react";
import { MangaInfo } from "../components/ContentInfo/Manga/MangaInfo";
import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navbar/Navigation";

export const MangaDetails = () => {
  return (
    <>
      <Navigation />
      <MangaInfo />
      <Footer />
    </>
  );
};
