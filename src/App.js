import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { ScrollToTop } from "./helpers";
import { AnimeDetails } from "./pages/AnimeDetails";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { MangaDetails } from "./pages/MangaDetails";
import { Search } from "./pages/Search";
import { SearchType } from "./pages/SearchType";
import { useAuth } from "./hooks/useAuth";

export const App = () => {
  const { user } = useAuth();

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/search/anime" /> : <Home />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/search/anime" /> : <SignUp />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/search/anime" /> : <Login />}
        />
        <Route path="/anime/:contentId" element={<AnimeDetails />} />
        <Route path="/manga/:contentId" element={<MangaDetails />} />
        <Route path="/search/:content" element={<Search />} />
        <Route path="/search/:content/:searchType" element={<SearchType />} />
      </Routes>
    </Router>
  );
};
