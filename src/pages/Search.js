import React from "react";
import { BrowseSearch } from "../components/Browse/BrowseSearch";
import { Filter } from "../components/Filter/Filter";
import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navbar/Navigation";

export const Search = () => {
  return (
    <>
      <Navigation />
      <Filter />
      <BrowseSearch />
      <Footer />
    </>
  );
};
