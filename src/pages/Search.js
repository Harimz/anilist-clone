import React from "react";
import { Filter } from "../components/Filter/Filter";
import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navbar/Navigation";
import { SearchContent } from "../components/SearchContent/SearchContent";

export const Search = () => {
  return (
    <>
      <Navigation />
      <Filter />
      <SearchContent />
      <Footer />
    </>
  );
};