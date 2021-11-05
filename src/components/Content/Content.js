import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { useSearchMutation } from "../../app/services/anilistApi";

export const Content = () => {
  const [search, { data }] = useSearchMutation();

  useEffect();

  return <Container></Container>;
};
