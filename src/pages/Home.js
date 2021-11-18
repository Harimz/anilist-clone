import React from "react";
import { TopAnime } from "../components/TopAnime/TopAnime";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Navigation } from "../components/Navbar/Navigation";
import { Filter } from "../components/Filter/Filter";
import { BrowseContent } from "../components/Browse/BrowseContent";

export const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Filter />
      <BrowseContent type="anime" searchType="trending" title="TRENDING NOW" />
      <BrowseContent
        type="anime"
        searchType="top-100"
        title="ALLTIME POPULAR"
      />
      <BrowseContent
        type="anime"
        searchType="upcoming"
        title="UPCOMING ANIME"
      />
      <TopAnime />
      <Footer />
    </>
  );
};
