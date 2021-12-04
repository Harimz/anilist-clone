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
import { ProfilePage } from "./components/Profile/ProfilePage";

export const App = () => {
  const { user } = useAuth();

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
          element={user ? <ProfilePage /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};
