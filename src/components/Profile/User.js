import React from "react";
import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import defaultAvatar from "../../assets/profileImages/default.png";

export const User = () => {
  return (
    <Box mr="1rem" ml="2rem">
      <Image src={defaultAvatar} h="3rem" />
    </Box>
  );
};
