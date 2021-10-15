import React from "react";
import { Browse } from "../components/Browse/Browse";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Navigation } from "../components/Navbar/Navigation";

export const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Browse />
      <Footer />
    </>
  );
};
