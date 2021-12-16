import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { ScrollToTop } from "./utils/ScrollToTop";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { SearchType } from "./pages/SearchType";
import { useAuth } from "./hooks/useAuth";
import { Navigation } from "./components/Navbar/Navigation";
import { Footer } from "./components/Footer/Footer";
import { LoginForm } from "./components/Form/LoginForm";
import { SignUpForm } from "./components/Form/SignUpForm";
import { AnimeInfo } from "./components/ContentInfo/Anime/AnimeInfo";
import { MangaInfo } from "./components/ContentInfo/Manga/MangaInfo";
import { AnimeList } from "./pages/AnimeList";
import { OverView } from "./pages/OverView";
import { MangaList } from "./pages/MangaList";
import { useStoreList } from "./hooks";

export const App = () => {
  const { user } = useAuth();
  useStoreList(user);

  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/search/anime" /> : <Home />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/search/anime" /> : <SignUpForm />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/search/anime" /> : <LoginForm />}
        />
        <Route path="/anime/:contentId" element={<AnimeInfo />} />
        <Route path="/manga/:contentId" element={<MangaInfo />} />
        <Route path="/search/:content" element={<Search />} />
        <Route path="/search/:content/:searchType" element={<SearchType />} />
        <Route
          path="/user/:username"
          element={user ? <OverView /> : <Navigate to="/login" />}
        />
        <Route
          path="/user/:username/animelist"
          element={user ? <AnimeList /> : <Navigate to="/login" />}
        />
        <Route
          path="/user/:username/mangalist"
          element={user ? <MangaList /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};
