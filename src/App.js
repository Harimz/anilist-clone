import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./helpers";
import { Anime } from "./pages/anime";
import { AnimeDetails } from "./pages/AnimeDetails";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { MangaDetails } from "./pages/MangaDetails";
import { Search } from "./pages/Search";

export const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/anime/:contentId" element={<AnimeDetails />} />
        <Route path="/manga/:contentId" element={<MangaDetails />} />
        <Route path="/search/:content" element={<Search />} />
      </Routes>
    </Router>
  );
};
