import React from "react";
import { Container, Flex } from "@chakra-ui/layout";
import { BsFillGrid3X3GapFill, BsFillGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useColorMode } from "@chakra-ui/color-mode";
import { setUserView } from "../../../app/viewSlice";

export const ListViews = () => {
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { userView } = useSelector((state) => state.views);

  return (
    <Container maxW="container.xl" mt="1rem">
      <Flex gridGap="1rem" justify="flex-end">
        <Flex
          p="1rem"
          gridGap="1rem"
          bgColor={isDark ? "blue.400" : "white"}
          borderRadius="0.5rem"
        >
          <FaThList
            size={22}
            color={userView === "list" ? "#A0B1C5" : "#516170"}
            cursor="pointer"
            onClick={() => dispatch(setUserView({ view: "list" }))}
          />
          <BsFillGridFill
            size={22}
            color={userView === "no-pic-list" ? "#A0B1C5" : "#516170"}
            cursor="pointer"
            onClick={() => dispatch(setUserView({ view: "no-pic-list" }))}
          />
          <BsFillGrid3X3GapFill
            size={22}
            color={userView === "card" ? "#A0B1C5" : "#516170"}
            cursor="pointer"
            onClick={() => dispatch(setUserView({ view: "card" }))}
          />
        </Flex>
      </Flex>
    </Container>
  );
};
