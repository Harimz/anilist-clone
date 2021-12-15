import React from "react";
import { Container, Flex } from "@chakra-ui/layout";
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl, FaThList } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setUserView } from "../../../app/viewSlice";
import { useIsDark } from "../../../hooks";

export const ListViews = () => {
  const dispatch = useDispatch();
  const { isDark } = useIsDark();
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
          <FaListUl
            size={22}
            color={userView === "no-pic-list" ? "#A0B1C5" : "#516170"}
            cursor="pointer"
            onClick={() => dispatch(setUserView({ view: "no-pic-list" }))}
          />
          <BsFillGridFill
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
