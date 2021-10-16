import React from "react";
import { Footer } from "../components/Footer/Footer";
import { SignUpForm } from "../components/Form/SignUpForm";
import { Navigation } from "../components/Navbar/Navigation";

export const SignUp = () => {
  return (
    <>
      <Navigation />
      <SignUpForm />
      <Footer />
    </>
  );
};
