import React from "react";
import { BrowseContent } from "../components/Browse/BrowseContent";
import { Filter } from "../components/Filter/Filter";
import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navbar/Navigation";

export const SearchType = () => {
  return (
    <>
      <Navigation />
      <Filter />
      <BrowseContent amount={100} />
      <Footer />
    </>
  );
};
