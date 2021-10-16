import React from "react";
import { TopAnime } from "../components/TopAnime/TopAnime";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Navigation } from "../components/Navbar/Navigation";
import { Filter } from "../components/Filter/Filter";
import { BrowseManga } from "../components/Browse/BrowseManga";
import { BrowseAnime } from "../components/Browse/BrowseAnime";

export const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Filter />
      <BrowseAnime title="UPCOMING ANIME" amount={10} type="anime" />
      <BrowseManga title="TOP MANGA" amount={10} type="manga" />
      <TopAnime />
      <Footer />
    </>
  );
};
