import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProtectedRoute, ScrollToTop } from "./helpers";
import { useAuthListener } from "./hooks";
import { Anime } from "./pages/anime";
import { AnimeDetails } from "./pages/AnimeDetails";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { MangaDetails } from "./pages/MangaDetails";
import { Search } from "./pages/Search";

export const App = () => {
  const { user } = useAuthListener();

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <ProtectedRoute exact path="/" auth={!user} component={Home} />
        <ProtectedRoute exact path="/signup" auth={!user} component={SignUp} />
        <ProtectedRoute exact path="/login" auth={!user} component={Login} />
        <ProtectedRoute exact path="/anime" auth={user} component={Anime} />
        <Route path="/anime/:contentId" component={AnimeDetails} />
        <Route path="/manga/:contentId" component={MangaDetails} />
        <Route path="/search/:content" component={Search} />
      </Switch>
    </Router>
  );
};
