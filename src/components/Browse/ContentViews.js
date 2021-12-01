import React from "react";
import { Flex } from "@chakra-ui/layout";
import { BsFillGrid3X3GapFill, BsFillGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setView } from "../../app/viewSlice";

export const ContentViews = () => {
  const dispatch = useDispatch();
  const { view } = useSelector((state) => state.views);

  return (
    <Flex gridGap="1rem" justifyContent="end" mb="1rem">
      <BsFillGrid3X3GapFill
        cursor="pointer"
        size={25}
        style={{
          color: `${view === "grid" ? "#C9D7E3" : "#647380"}`,
          _hover: "red",
        }}
        onClick={() => dispatch(setView({ view: "grid" }))}
      />
      <BsFillGridFill
        cursor="pointer"
        size={25}
        style={{
          color: `${view === "card" ? "#C9D7E3" : "#647380"}`,
          _hover: "red",
        }}
        onClick={() => dispatch(setView({ view: "card" }))}
      />
      <FaThList
        cursor="pointer"
        size={25}
        style={{
          color: `${view === "list" ? "#C9D7E3" : "#647380"}`,
          _hover: "red",
        }}
        onClick={() => dispatch(setView({ view: "list" }))}
      />
    </Flex>
  );
};
