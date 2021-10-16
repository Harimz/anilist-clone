import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../components/Footer/Footer";
import { LoginForm } from "../components/Form/LoginForm";
import { Navigation } from "../components/Navbar/Navigation";

export const Login = () => {
  return (
    <>
      <Navigation />
      <LoginForm />
      <Footer />
    </>
  );
};
