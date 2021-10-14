import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { MobileNav } from "./MobileNav";

export const Navigation = () => {
  const [isMobile] = useMediaQuery("(max-width: 1025px)");

  return (
    <>
      {isMobile && <MobileNav />}
      {!isMobile && <Navbar />}
    </>
  );
};
