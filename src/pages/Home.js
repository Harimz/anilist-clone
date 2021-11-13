import React from "react";
import { TopAnime } from "../components/TopAnime/TopAnime";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Navigation } from "../components/Navbar/Navigation";
import { Filter } from "../components/Filter/Filter";
import { BrowseTopContent } from "../components/Browse/BrowseTopContent";

export const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Filter />
      <BrowseTopContent
        type="upcoming"
        contentType="anime"
        title="UPCOMING ANIME"
      />
      <BrowseTopContent type="top" contentType="manga" title="TOP MANGA" />
      <TopAnime />
      <Footer />
    </>
  );
};
