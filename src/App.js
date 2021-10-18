import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./helpers";
import { useAuthListener } from "./hooks";
import { Anime } from "./pages/anime";
import { AnimeDetails } from "./pages/AnimeDetails";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

export const App = () => {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/" auth={!user} component={Home} />
        <ProtectedRoute exact path="/signup" auth={!user} component={SignUp} />
        <ProtectedRoute exact path="/login" auth={!user} component={Login} />
        <ProtectedRoute exact path="/anime" auth={user} component={Anime} />
        <Route path="/browse/:animeId" component={AnimeDetails} />
      </Switch>
    </Router>
  );
};
